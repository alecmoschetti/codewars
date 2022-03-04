import { findSquare } from "../index.js";

describe("find perfect square test suite", () => {

	test("basic example", () => expect(findSquare(4)).toBe(true));
	test("still basic", () => expect(findSquare(25)).toBe(true));
	test("negative number", () => expect(findSquare(-1)).toBe(false));
	test("not a square", () => expect(findSquare(3)).toBe(false));
	test("still not a square", () => expect(findSquare(26)).toBe(false));
	test("how about zero", () => expect(findSquare(0)).toBe(true));
    
});