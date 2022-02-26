export function adding_big_numbers(a, b) {
	let result = "";

	if (+a > Number.MAX_SAFE_INTEGER || +b > Number.MAX_SAFE_INTEGER) {
		const A_LENGTH = a.length;
		const B_LENGTH = b.length;
		const MAX_LENGTH = Math.max(A_LENGTH, B_LENGTH);

		let carry = 0;

		for (let i = 1; i <= MAX_LENGTH; i++) {
			let x = +a.charAt(A_LENGTH - i);
			let y = +b.charAt(B_LENGTH - i);

			let sum = carry + x + y;
            carry = Math.trunc(sum / 10);
			sum %= 10;

			result = // does i = maxLength and carry is not zero ?
				i === MAX_LENGTH && carry ? (carry * 10) + sum + result : sum + result;
		}
	} else {
		result = (+a + +b).toString();
	}

	return result;
}
