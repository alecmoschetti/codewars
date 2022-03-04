export function digital_root(n) {
	if (n < 10) {
		return n;
	}
	let n_array = Array.from(String(n), Number);
	let reduced_n = n_array.reduce((a, b) => a + b);
	if (reduced_n > 9) {
		return digital_root(reduced_n);
	} else {
		return reduced_n;
	}
}
