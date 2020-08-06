import S from "@sanity/desk-tool/structure-builder";
import { MdBusiness } from "react-icons/md";

export default S.listItem()
	.title("Company Info")
	.child(
		S.editor()
			.id("companyInfo")
			.schemaType("companyInfo")
			.documentId("companyInfo")
	)
	.icon(MdBusiness);
