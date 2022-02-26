export function breakCamelCase(string) {
	let result = "";
	for (const char of string) {
		let codePoint = char.charCodeAt(0);
		(codePoint >= 65 && codePoint <= 90) ? result += ` ${char}` : result += char;
    }
	return result;
}
