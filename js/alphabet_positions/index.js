export function alphabetPosition(text) {
	text = text.toLowerCase();
	let textNumbers = [];
    for (let letter of text) {
	  let utfChar = letter.charCodeAt(0);
	  let utfCharAdjusted = utfChar - 96;
	  if ((utfCharAdjusted >= 1) && (utfCharAdjusted <= 26)) {
		textNumbers.push(utfCharAdjusted);
	  }
  	}
  	text = textNumbers.join(' ');
  	return text;
}

alphabetPosition("The sunset sets at twelve o' clock.");
// alphabetPosition("A");
// 1 