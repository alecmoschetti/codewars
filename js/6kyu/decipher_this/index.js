export function decipherThis(str) {
	const regex = /\d+/g;
	const split = str.split(" ");
	const result = split.map((word) => {
		let match = word.match(regex);
		const letter = String.fromCodePoint(+match);
		if (match) {
			word = word.replace(regex, letter);
		}

		let chars = word.split("");
		if (chars.length >= 3) {
			let secondChar = chars[1];
			let lastChar = chars.pop();

			chars.splice(1, 1, lastChar);
			chars.push(secondChar);

			word = chars.join("");
		}

		return word;
	});
	return result.join(" ");
}

console.log(decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o")); // 'Have a go at this and see how you do'
