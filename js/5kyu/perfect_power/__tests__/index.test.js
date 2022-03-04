import { isPP } from "../index.js";

describe("perfect power test suite", () => {

    test("basic example", () => expect(isPP(4)).toEqual([2, 2]));
    test("null example", () => expect(isPP(5)).toEqual(null));
    test("bigger power example", () => expect(isPP(81)).toEqual([3, 4]));
    
});
