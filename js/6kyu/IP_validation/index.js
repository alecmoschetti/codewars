const isValidCheck = (num) => !isNaN(num) && num >= 0 && num <= 255;

export function isValidIp(str) {
	const split = str.split(".");

	const split_to_numbers = split.map((num) => {
		if (!/^[0-9]*$/.test(num) || /^[\b0].+/.test(num) || !num) {
			num = null;
		} else {
			return Number(num);
		}
	});

	if (split.length !== 4 || split_to_numbers.every(isValidCheck) === false) {
		return false;
	} else {
		return true;
	}
}
