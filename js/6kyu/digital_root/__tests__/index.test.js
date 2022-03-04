import { digital_root } from "../index.js";

describe("digital root test suite", () => {

	test("basic digital root", () => {
        expect(digital_root(16)).toBe(7);
	});
	
	test("hundreds digit", () => {
        expect(digital_root(942)).toBe(6);
	});
    
	test("hundred thousandth digits", () => {
        expect(digital_root(132189)).toBe(6);
        expect(digital_root(493193)).toBe(2);
	});
    
});