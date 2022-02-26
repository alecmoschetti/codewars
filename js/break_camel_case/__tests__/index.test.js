import { breakCamelCase } from "../index.js";

describe("break camel case test suite", () => {

	test("basic", () => {
        expect(breakCamelCase("camelCasing")).toEqual("camel Casing");
	});
	
	test("single word", () => {
        expect(breakCamelCase('racer')).toEqual('racer');
	});

	test("empty string", () => {
		expect(breakCamelCase("")).toEqual("");
	});
    
});