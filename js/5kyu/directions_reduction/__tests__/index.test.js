import { dirReduc } from "../index.js";

describe("directions reduction test suite", () => {
	test("basic directions reduction", () => {
		expect(
			dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
		).toEqual(["WEST"]);
	});

	test("reduce to no directions", () => {
		expect(
			dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])
		).toEqual([]);
	});

	test("no reductions", () => {
		expect(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])).toEqual([
			"NORTH",
			"WEST",
			"SOUTH",
			"EAST",
		]);
	});

	test("triple north", () => {
		expect(
			dirReduc([
				"SOUTH",
				"NORTH",
				"WEST",
				"EAST",
				"NORTH",
				"SOUTH",
				"NORTH",
				"NORTH",
				"NORTH",
				"EAST",
				"WEST",
				"SOUTH",
				"NORTH",
				"EAST",
				"WEST",
			])
		).toEqual(["NORTH", "NORTH", "NORTH"]);
	});

	test("east south", () => {
		expect(
			dirReduc([
				"NORTH",
				"SOUTH",
				"WEST",
				"EAST",
				"SOUTH",
				"NORTH",
				"EAST",
				"SOUTH",
				"WEST",
				"EAST",
				"SOUTH",
				"NORTH",
				"EAST",
				"WEST",
			])
		).toEqual(["EAST", "SOUTH"]);
	});
});
