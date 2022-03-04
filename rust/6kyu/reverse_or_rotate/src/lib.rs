/*
The input is a string str of digits.
Cut the string into chunks (a chunk here is a substring of the initial string)
of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk;
otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.
*/

pub fn revrot(s: &str, c: usize) -> String {
    let mut result = String::with_capacity(s.len());
    if c <= 0 || s.len() == 0 || c > s.len() {
        result
    } else {
        let (first, rest) = s.split_at(c);
        let chunks = vec![first, rest];

        for chunk in chunks {
            let length = chunk.len();
            if length < c {
                continue;
            } else if length > c {
                let chunk = &revrot(chunk, c);
                result.push_str(chunk);
            } else {
                result.push_str(&reverse_or_rotate(chunk));
            }
        }
        result
    }
}

// * neither cubing nor converting to a digit changes the evenness ;) tip from @raffimolero here on codewars
fn reverse_or_rotate(n: &str) -> String {
    if n.chars().map(|c| c as u32).sum::<u32>() % 2 == 0 {
        n.chars().rev().collect()
    } else {
        String::from(&n[1..]) + &n[0..1]
    }
}

#[cfg(test)]
mod tests {
    use crate::revrot;

    #[test]
    fn rotated() {
        assert_eq!(revrot("123456987654", 6), String::from("234561876549"));
    }

    #[test]
    fn reversed() {
        assert_eq!(revrot("664438769", 8), String::from("67834466"));
    }

    #[test]
    fn rotated_and_reversed() {
        assert_eq!(revrot("123456987653", 6), String::from("234561356789"));
    }

    #[test]
    fn empty() {
        assert_eq!(revrot("", 0), String::from(""));
    }

    #[test]
    fn simple() {
        assert_eq!(revrot("1234", 0), String::from(""));
    }
    #[test]
    fn example() {
        assert_eq!(revrot("66443875", 4), String::from("44668753"));
    }
    #[test]
    fn complex() {
        assert_eq!(
            revrot("73304991087281576455176044327690580265896", 8),
            String::from("1994033775182780067155464327690480265895")
        );
    }
}
