import { multiplesOf3Or5 } from '../index.js';

describe("multiples of three or five test suite", () => {

	test("basic example", () => expect(multiplesOf3Or5(10)).toBe(23));
	test("another basic example", () => expect(multiplesOf3Or5(20)).toBe(78));
	test("yet another basic example", () => expect(multiplesOf3Or5(200)).toBe(9168));
	test("smaller integer example", () => expect(multiplesOf3Or5(-1)).toBe(0));
	test("zero example", () => expect(multiplesOf3Or5(0)).toBe(0));
    
});