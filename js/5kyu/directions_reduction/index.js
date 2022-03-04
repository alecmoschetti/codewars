/* function dirReduc(arr) {
	const NORTH = "NORTH";
	const SOUTH = "SOUTH";
	const EAST = "EAST";
	const WEST = "WEST";

	function isOpposite(dir1, dir2) {
		switch (true) {
			case dir1 === NORTH && dir2 === SOUTH:
				return true;
			case dir1 === SOUTH && dir2 === NORTH:
				return true;
			case dir1 === EAST && dir2 === WEST:
				return true;
			case dir1 === WEST && dir2 === EAST:
				return true;
			default:
				return false;
		}
	}

	for (let i = 0; i <= arr.length; i++) {
		if (i === 0) {
			continue;
		}

		let current = arr[i];
		let previous = arr[i - 1];

		if (isOpposite(previous, current)) {
			arr.splice(arr.indexOf(previous), 2);
			i = 0;
			continue;
		} else if (previous === current) {
			i += 2;
			continue;
		}
	}

	console.log(arr);
	return arr;
} */

// @ using regex makes this 100x easier
// @ banged my head against this problem for hours until finally I needed to see how others were doing this

// # TODO: try to recreate this function solo after enough time has passed.

export function dirReduc(arr) {
    let directions = arr.join('');
    const opposites = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/g;
    while (opposites.test(directions)) {
        directions = directions.replace(opposites, '');
    }

    const result = directions.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
    return result;
}
