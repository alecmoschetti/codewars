export function dataReverse(data) {
    let results = [];
    let n = data.length / 8;
    for (let i = 0; i <= n; i++) {
        const byte = data.splice(0, 8);
        results.unshift(...byte);
    }
    return results;
}