import S from "@sanity/desk-tool/structure-builder";

export default S.listItem()
	.id("projects")
	.schemaType("project")
	.title("Projects")
	.child(S.documentTypeList("project"));
