import { anagrams } from "../index.js";

describe("anagrams test suite", () => {

	test("basic anagram test, short words", () => {
        expect(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"])).toEqual(['aabb', 'bbaa']);
	});
	
	test("some longer words now", () => {
        expect(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])).toEqual(['carer', 'racer']);
	});

	test("and even longer now", () => {
		expect(anagrams('laser', ['lazing', 'lazy',  'lacer'])).toEqual([]);
	});
    
});