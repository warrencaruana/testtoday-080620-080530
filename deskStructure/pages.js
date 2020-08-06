import S from "@sanity/desk-tool/structure-builder";
import { FaFile } from "react-icons/fi";

export default S.listItem()
	.title("Pages")
	.child(
		S.list()
			.title("Pages")
			.items([
				S.listItem()
					.title("About")
					.child(
						S.editor()
							.id("aboutPage")
							.schemaType("page")
							.documentId("about")
					)
					.icon(FaFile),
				S.listItem()
					.title("Contact")
					.child(
						S.editor()
							.id("contactPage")
							.schemaType("page")
							.documentId("contact")
					)
					.icon(FaFile)
			])
	);
