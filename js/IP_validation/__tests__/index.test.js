import { isValidIp } from "../index.js";

describe("validate IP test suite", () => {

	test("basic ip test, simple as it gets", () => {
        expect(isValidIp("0.0.0.0")).toBe(true);
        expect(isValidIp("1.2.3.4")).toBe(true);
        expect(isValidIp("137.255.156.100")).toBe(true);
	});
	
	test("these should all be false", () => {
        expect(isValidIp("1.2.3.400")).toBe(false);
        expect(isValidIp("1.2.3")).toBe(false);
        expect(isValidIp("abc.def.ghi.jkl")).toBe(false);
        expect(isValidIp("1.2.3.4.5.6")).toBe(false);
        expect(isValidIp('1e0.1e1.1e2.2e2')).toBe(false);
        expect(isValidIp('\n1.2.3.4')).toBe(false);
        expect(isValidIp('12.34.56.-7')).toBe(false);
        expect(isValidIp('01.02.03.04')).toBe(false);
        expect(isValidIp('94.233.19.')).toBe(false);
	});
    
});