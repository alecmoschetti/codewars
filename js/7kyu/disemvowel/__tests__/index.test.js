import { disemvowel } from "../index.js";

describe("disemvowel trolls test suite", () => {
	test("basic disemvowel", () => expect(disemvowel("This website is for losers LOL!")).toBe("Ths wbst s fr lsrs LL!"));
});
