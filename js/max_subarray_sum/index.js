export function maxSequence(arr) {
    let result = 0;
    let currentSum = 0;

    for (let x of arr) {
        currentSum = Math.max(0, currentSum + x);
        result = Math.max(result, currentSum);
    }

    return result;
}