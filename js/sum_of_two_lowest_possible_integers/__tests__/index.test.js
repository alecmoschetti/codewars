import { sumTwoSmallestNumbers } from "..";

describe("Sum of two lowest positive integers test suite", () => {
	test("basic tests", () => {
		expect(sumTwoSmallestNumbers([5, 8, 12, 19, 22])).toBe(13);
		expect(sumTwoSmallestNumbers([15, 28, 4, 2, 43])).toBe(6);
		expect(sumTwoSmallestNumbers([243, 546, 745, 123, 978])).toBe(366);
		expect(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])).toBe(
			3453455
		);
	});
});
