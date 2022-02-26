// @ divide the problem:

// * determine if any array contains 0, if it does stop and return false
// * determine if an array of integers 1-9 repeats any integer

// * write a function that takes the sudoku board and an index(column position)
// * that returns a new array of that column's position for each row
// * probably to be called in a destructured loop

// * write a function that creates the nine 3 x 3 boards from the original board

// * make sure it passes each one and return true or false

const hasZero = (arr) => arr.some((n) => n === 0); // true if array has zero
const isUnique = (arr) => [...new Set(arr)].length === arr.length; // true if array is unique
const range = (row, column, start) => [...Array()];

function validSolution(board) {
	let invalid = board.some((row) => hasZero(row));
	if (invalid) return false;

	let rows = [];
	let columns = [];
	let grid = [[], [], [], [], [], [], [], [], []];

	for (let i = 0; i < 9; i += 1) {
		const row = board[i];
		rows.push(row);

		const rowHasRepeats = !isUnique(row);
		if (rowHasRepeats) return false;

		let column = [];
		for (let j = 0; j < 9; j += 1) {
			column.push(board[j][i]);
		}
		columns.push(column);
		const columnHasRepeats = !isUnique(column);
		if (columnHasRepeats) return false;
	}

    console.log(columns);
	// return true;
}

console.log(
	validSolution([
		[5, 3, 4, 6, 7, 8, 9, 1, 2],
		[6, 7, 2, 1, 9, 5, 3, 4, 8],
		[1, 9, 8, 3, 4, 2, 5, 6, 7],
		[8, 5, 9, 7, 6, 1, 4, 2, 3],
		[4, 2, 6, 8, 5, 3, 7, 9, 1],
		[7, 1, 3, 9, 2, 4, 8, 5, 6],
		[9, 6, 1, 5, 3, 7, 2, 8, 4],
		[2, 8, 7, 4, 1, 9, 6, 3, 5],
		[3, 4, 5, 2, 8, 6, 1, 7, 9],
	])
); // => true

console.log(
	validSolution([
		[5, 3, 4, 6, 7, 8, 9, 1, 2],
		[6, 7, 2, 1, 9, 0, 3, 4, 8],
		[1, 0, 0, 3, 4, 2, 5, 6, 0],
		[8, 5, 9, 7, 6, 1, 0, 2, 0],
		[4, 2, 6, 8, 5, 3, 7, 9, 1],
		[7, 1, 3, 9, 2, 4, 8, 5, 6],
		[9, 0, 1, 5, 3, 7, 2, 1, 4],
		[2, 8, 7, 4, 1, 9, 6, 3, 5],
		[3, 0, 0, 4, 8, 1, 1, 7, 9],
	])
); // => false
