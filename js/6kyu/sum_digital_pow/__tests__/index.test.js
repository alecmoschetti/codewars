import { sumDigPow } from "..";

describe("sum digital power test suite", () => {
    
    test("given example", () => expect(sumDigPow(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]));
    test("another given example", () => expect(sumDigPow(1, 100)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 89]));
    test("only one", () => expect(sumDigPow(10, 100)).toEqual([89]));
    test("empty array example", () => expect(sumDigPow(90, 100)).toEqual([]));
    
});