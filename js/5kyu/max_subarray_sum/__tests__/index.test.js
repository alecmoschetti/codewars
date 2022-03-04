import { maxSequence } from "../index.js";

describe("max sequence test suite", () => {

	test("empty array example", () => expect(maxSequence([])).toBe(0));
	test("basic example", () => expect(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6));
	test("positives only example", () => expect(maxSequence([1, 2, 3, 4])).toBe(10));
	test("negatives only example", () => expect(maxSequence([-1, -2, -3, -4])).toBe(0));
	test("bigger example", () => expect(maxSequence([ 7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43 ])).toBe(155));
    
});