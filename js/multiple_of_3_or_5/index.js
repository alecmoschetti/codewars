export function multiplesOf3Or5(number) {
	if (2 >= number) {
		return 0;
	}
  
	let n = 0;
	let result = 0;

	do {
		if (n % 3 === 0 || n % 5 === 0) {
			result += n;
		}
		n += 1;
	} while (n < number);

	return result;
}
