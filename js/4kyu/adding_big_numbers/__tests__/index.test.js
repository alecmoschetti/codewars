import { adding_big_numbers } from "../index.js";

describe("adding big string numbers test suite", () => {

	test("start small", () => {
        expect(adding_big_numbers("1", "1")).toBe("2");
	});
	
	test("hundreds places", () => {
        expect(adding_big_numbers("123", "456")).toBe("579");
        expect(adding_big_numbers("12", "456")).toBe("468");
        expect(adding_big_numbers("101", "100")).toBe("201");
	});
    
	test("now we're in the thousands, babyyyy", () => {
        expect(adding_big_numbers("888", "222")).toBe("1110");
        expect(adding_big_numbers("1372", "69")).toBe("1441");
	});

	test("big ints now", () => {
        expect(adding_big_numbers('90938498237058927340892374089', '63829983432984289347293874')).toBe("91002328220491911630239667963");
	});
    
});