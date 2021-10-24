export function makeUppercase(str:any) {
	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
	return str.toUpperCase();
}

export function replaceSpaces(str:any) {
	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
	return str.replace(/\s/g, "_");
}

export function limitLength(len:any, str:any) {
	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
	return str.substr(0, len);
}
