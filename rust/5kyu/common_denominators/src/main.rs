use num::integer::gcd;
use num::integer::lcm;
use std::collections::HashMap;

fn find_lcm(v: Vec<i64>) -> i64 {
    let least_common_multiple = v.iter().fold(v[0], |acc, next| lcm(acc, *next));
    least_common_multiple
}

fn find_gcd(a: i64, b: i64) -> i64 {
    let mut x = a;
    let mut y = b;
    while y != 0 {
        let t = y;
        y = x % y;
        x = t;
    }
    x
}

fn simplify(tup: (i64, i64)) -> (i64, i64) {
    let greatest_common_divisor = gcd(tup.0, tup.1);
    let result = (tup.0 / greatest_common_divisor, tup.1 / greatest_common_divisor);
    result
}

fn convert_fracts(l: Vec<(i64, i64)>) -> Vec<(i64, i64)> {
    if l.len() == 0 {
        return vec![];
    }

    let mut results: Vec<(i64, i64)> = Vec::new();
    let l_simplified: Vec<(i64, i64)> = l.iter().map(|tup| simplify(*tup)).collect();

    let mut numerators: Vec<i64> = l_simplified.iter().map(|tup| tup.0).collect();
    let denominators: Vec<i64> = l_simplified.iter().map(|tup| tup.1).collect();

    let lcm = denominators
        .iter()
        .fold(denominators[0], |cur, next| lcm(cur, *next));

    let quotients: Vec<i64> = denominators.into_iter().map(|denom| &lcm / denom).collect();

    for (num, quot) in numerators.iter_mut().zip(quotients.iter()) {
        let numerator = *num * quot;
        results.push((numerator, lcm));
    }

    results
}

fn count_occurrences(vec: Vec<i64>) {
    let mut count: HashMap<i64, usize> = HashMap::new();
    for x in vec {
        *count.entry(x).or_default() += 1;
    }
    println!("count is: {:#?}", count);
}

// * pretty much https://docs.rs/primes/0.2.3/primes/index.html verbatim

fn prime_factors(n: i64) -> Vec<i64> {
    let mut stack: Vec<i64> = Vec::new();
    let mut current = n;

    if n <= 1 {
        return stack;
    };

    loop {
        let int = first_factor(current);
        stack.push(int);
        if current == int {
            break;
        } else {
            current = current / int;
        }
    }

    stack
}

fn prime_factors_unique(n: i64) -> Vec<i64> {
    let mut stack: Vec<i64> = Vec::new();
    let mut current = n;

    if n <= 1 {
        return stack;
    };

    loop {
        let int = first_factor(current);
        stack.push(int);
        if current == int {
            break;
        } else {
            while current % int == 0 {
                current = current / int;
            }
            if current == 1 {
                break;
            }
        }
    }

    stack
}

fn is_prime(n: i64) -> bool {
    if n == 2 || n == 3 {
        true
    } else if n <= 1 || n % 2 == 0 || n % 3 == 0 {
        false
    } else {
        let mut i = 5;
        while i * i <= n {
            if n % i == 0 || n % (i + 2) == 0 {
                return false;
            } else {
                i = i + 6;
            }
        }
        true
    }
}

fn first_factor(n: i64) -> i64 {
    let test_for_two = n % 2 == 0;
    let factor = match test_for_two {
        true => 2,
        _ => {
            for int in (3..).step_by(2).take_while(|x| x * x <= n) {
                if n % int == 0 {
                    return int;
                } else {
                    continue;
                }
            }
            n
        }
    };
    factor
}

fn main() {
    // convert_fracts(vec![(1, 2), (1, 3), (1, 4)]);
    convert_fracts(vec![(690, 1300), (87, 1310), (30, 40)]);
    // let stack = prime_factors(4);
    // count_occurrences(stack);
}

#[cfg(test)]
mod tests {
    use super::*;

    fn testing(l: Vec<(i64, i64)>, exp: Vec<(i64, i64)>) -> () {
        assert_eq!(convert_fracts(l), exp)
    }

    #[test]
    fn success() {
        testing(
            vec![(1, 2), (1, 3), (1, 4)],
            vec![(6, 12), (4, 12), (3, 12)],
        );
        testing(vec![], vec![]);
        testing(
            vec![(69, 130), (87, 1310), (3, 4)],
            vec![(18078, 34060), (2262, 34060), (25545, 34060)],
        );
        testing(
            vec![(690, 1300), (87, 1310), (30, 40)],
            vec![(18078, 34060), (2262, 34060), (25545, 34060)],
        );
    }

    #[test]
    fn prime_numbers_test() {
        assert_eq!(is_prime(2), true);
        assert_eq!(is_prime(3), true);
        assert_eq!(is_prime(1087), true);
        assert_eq!(is_prime(2293), true);
        assert_eq!(is_prime(4), false);
        assert_eq!(is_prime(5040), false);
        assert_eq!(is_prime(779674), false);
    }

    #[test]
    fn first_factor_test() {
        assert_eq!(first_factor(4), 2);
        assert_eq!(first_factor(63), 3);
        assert_eq!(first_factor(119), 7);
    }

    #[test]
    fn prime_factors_test() {
        assert_eq!(prime_factors(4), vec![2, 2]);
        assert_eq!(prime_factors(1310), vec![2, 5, 131]);
    }

    #[test]
    fn unique_primes_test() {
        assert_eq!(prime_factors_unique(1310), vec![2, 5, 131]);
    }

    #[test]
    fn lcm_test() {
        assert_eq!(find_lcm(vec![2, 3, 4]), 12);
    }
}
