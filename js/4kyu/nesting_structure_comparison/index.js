function checkEmpty(arr) {
	return Array.isArray(arr) && (arr.length === 0 || arr.every(checkEmpty));
}

// # TODO: redo this challenge. this is not my best work.

Array.prototype.sameStructureAs = function (other) {
	let result = false;
	if (!Array.isArray(other)) {
		return result;
	} else {
		for (let i of other.entries()) {
			const [key, value] = i;
			if (Array.isArray(this[key]) && Array.isArray(other[key])) {
				if (checkEmpty(value) && checkEmpty(this[key])) {
					result = true;
				} else if (checkEmpty(value) || checkEmpty(this[key])) {
					break;
				} else {
					this[key].length === value.length
						? (result = true)
						: (result = false);
				}
			} else if (Array.isArray(this[key]) || Array.isArray(other[key])) {
				break;
			} else {
				result = true;
			}
		}
	}
	return result;
};
