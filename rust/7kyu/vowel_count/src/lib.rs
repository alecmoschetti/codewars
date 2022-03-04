pub fn get_count_one(string: &str) -> usize {
    let mut vowels_count: usize = 0;
    let vowels = vec!['a', 'e', 'i', 'o', 'u'];

    for char in string.chars() {
        if vowels.contains(&char) {
            vowels_count += 1;
        }
    }
    vowels_count
}

// really like this approach that I saw on codewars

pub fn get_count(string: &str) -> usize {
    string
        .chars()
        .filter(|&c| "aeiou".contains(c))
        .count()
}

#[cfg(test)]
mod tests {

    use super::*;

    #[test]
    fn it_works() {
        let result = 0;
        assert_eq!(get_count("xyz"), result);
    }

    #[test]
    fn fiver() {
        assert_eq!(get_count("abracadabra"), 5);
    }
}
