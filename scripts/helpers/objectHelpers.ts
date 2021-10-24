import { makeUppercase, replaceSpaces, limitLength } from "./stringHelpers";



// id is a number
// code is an uppercase string
// title is a string with spaces replaced with underscores and a maximum length of 12 characters
export function createProduct(id:number, code:string, title:string) {
	return {
		id: id,
		code: makeUppercase(code),
		title: limitLength(12, replaceSpaces(title)),
	};
}
