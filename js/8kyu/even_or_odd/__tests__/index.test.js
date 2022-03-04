import { even_or_odd } from "../index.js";

describe("even or odd test suite", () => {

	test("2 is even", () => {
        expect(even_or_odd(2)).toBe("Even");
	});
	
	test("7 is odd", () => {
        expect(even_or_odd(7)).toBe("Odd");
	});

	test("-42 is even", () => {
        expect(even_or_odd(-42)).toBe("Even");
	});

	test("-7 is odd", () => {
        expect(even_or_odd(-7)).toBe("Odd");
	});

	test("0 is even", () => {
        expect(even_or_odd(0)).toBe("Even");
	});
    
});