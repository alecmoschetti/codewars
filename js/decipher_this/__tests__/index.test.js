import { decipherThis } from "../index.js";

describe("decipher this test suite", () => {

	test("hello good day", () => expect(decipherThis("72olle 103doo 100ya")).toEqual('Hello good day'));
	test("ready set go", () => expect(decipherThis("82yade 115te 103o")).toEqual('Ready set go'));
	test("good luck", () => expect(decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o")).toEqual('Have a go at this and see how you do'));
    
});