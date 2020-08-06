import S from "@sanity/desk-tool/structure-builder";

export default S.listItem()
	.title("People")
	.schemaType("person")
	.child(S.documentTypeList("person").title("People"));
