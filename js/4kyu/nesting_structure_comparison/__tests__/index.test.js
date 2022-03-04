import "../index.js";

describe("nesting structure comparison test suite", () => {

	test("these should return true", () => {
        expect([1,1,1].sameStructureAs([2,2,2])).toBe(true);
        expect([1, [1, 1]].sameStructureAs([2, [2, 2]])).toBe(true);
        expect([[[], []]].sameStructureAs([[[], []]])).toBe(true);
    });

	test("these should return false", () => {
        expect([1, [1, 1]].sameStructureAs([[2, 2], 2])).toBe(false);
        expect([1, [1, 1]].sameStructureAs([[2], 2])).toBe(false);
        expect([[[], []]].sameStructureAs([[1, 1]])).toBe(false);
    });
    
});