import S from "@sanity/desk-tool/structure-builder";
import { MdBusiness, MdSettings } from "react-icons/md";

import client from "part:@sanity/base/client";
import locationStore from "part:@sanity/base/location";
import { map } from "rxjs/operators";
import { FiEdit, FiInbox, FiDatabase, FiLayers, FiCheck } from "react-icons/fi";

// Individual deskStructure
import siteSettings from "./siteSettings";
import companyInfo from "./companyInfo";
import projects from "./projects";
import post from "./post";
import pages from "./pages";
import people from "./people";
import category from "./category";

// Hide document types that we already have a structure definition for
const hiddenTypes = [
	"category",
	"companyInfo",
	"page",
	"person",
	"post",
	"project",
	"siteSettings"
];

const studio = S.list()
	.title("Content")
	.items([
		siteSettings,
		companyInfo,
		projects,
		post,
		pages,
		people,
		category,
		...S.documentTypeListItems().filter(
			listItem => !hiddenTypes.includes(listItem.getId())
		)
	]);

const locations = {
	studio
};
let last = "";
// Send a message to the parent
var sendMessage = function(msg) {
	// // console.log(msg);
	// console.log(JSON.stringify(msg));
	// Make sure you are sending a string, and to stringify JSON
	window.parent.postMessage(JSON.stringify(msg), "*");
};

export default () => {
	return locationStore.state.pipe(
		map(({ location }) => {
			console.table(location);

			sendMessage({
				origin: "sanityStudio",
				currentPath: location.pathname
			});

			window.currentStudioLocation = location;
			const loc =
				location.pathname.split("/")[1].replace("intent", last) ||
				"studio";
			last = loc !== "intent" && loc;
			console.log("PATH", loc);
			return locations[loc];
		})
	);
};
//

// console.log(location.pathname.split("/")[1]);
