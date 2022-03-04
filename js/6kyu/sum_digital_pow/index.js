export function sumDigPow(a, b) {
    let results = [];

    const getRange = (x, y) => [...Array(y - x + 1).fill(x)].map((c, d) => c + d);

    const calculate = n => {
        const separated = [...n + ''].map(n => +n);
        let sum = 0;
        for (let [index, num] of separated.entries()) {
            sum += Math.pow(num, index + 1);
        }
        return sum === n ? true : false;
    };

    const range = getRange(a, b);

    for (const n of range) {
        if (n > 0 && n < 10) {
            results.push(n);
        } else {
            let test = calculate(n);
            if (test) {
                results.push(n);
            }
        }
    }

    return results;
}
