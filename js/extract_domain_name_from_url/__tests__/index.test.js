import { domainName } from "../index.js";

describe("extract domain name test suite", () => {

	test("basic", () => expect(domainName("http://google.com")).toBe("google"));
	test("hyphenated domain name", () => expect(domainName("http://www.zombie-bites.com")).toBe("zombie-bites"));
	test("domain with page paths", () => expect(domainName("http://github.com/carbonfive/raygun")).toBe("github"));
	test("secure site basic", () => expect(domainName("https://youtube.com")).toBe("youtube"));
	test("different secure site basic", () => expect(domainName("https://www.cnet.com")).toBe("cnet"));
	test("different country basic", () => expect(domainName("http://google.com.jp")).toBe("google"));
	test("another different country basic", () => expect(domainName("www.xakep.ru")).toBe("xakep"));
	test("straight trash of a domain", () => expect(domainName("s8rg-857ab0d0exes26nb6q6fw775l.br")).toBe("s8rg-857ab0d0exes26nb6q6fw775l"));
    
});