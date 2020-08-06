import S from "@sanity/desk-tool/structure-builder";
import { MdSettings } from "react-icons/md";

export default S.listItem()
	.title("Site Settings")
	.child(
		S.editor()
			.id("siteSettings")
			.schemaType("siteSettings")
			.documentId("siteSettings")
	)
	.icon(MdSettings);
