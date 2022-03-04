import { printerError } from "../index.js";

describe("printer error test suite", () => {

	test("simple no printer errors passing example", () => {
		let string = "aaabbbbhaijjjm";
		expect(printerError(string)).toBe("0/14");
	});
	
	test("some printer errors passing example", () => {
		let string = "aaaxbbbbyyhwawiwjjjwwm";
		expect(printerError(string)).toBe("8/22");
	});

	test("another printer errors passing example", () => {
		let string = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
		expect(printerError(string)).toBe("3/56");
	});
    
});
