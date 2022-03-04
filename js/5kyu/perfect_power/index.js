function factorsOf(n) {
    const isEven = n % 2 === 0;
    const max = Math.sqrt(n);
    const increment = isEven ? 1 : 2;
    let factors = [1];
    let current = isEven ? 2 : 3;
    for (; current <= max; current += increment) {
        if (n % current !== 0) continue;
        factors.push(current);
        let compliment = n / current;
        if (compliment !== current) {
            factors.push(compliment);
        }
    }
    return factors;
}

export function isPP(n) {
    if (Number.isInteger(n) === false) return null;
    let divisors = factorsOf(n);
    let highestK = Math.round(Math.log2(n));
    let result = [];
    for (let k = 2; k <= highestK; k++) {
        for (const m of divisors) {
            if (Math.round(Math.pow(m, k)) === n) {
                result = [m, k];
                break;
            }
        }
    }

    if (result.length === 2) {
        return result;
    } else {
        return null;
    }
}
