
// * some internet person's solution
pub fn reverse_words(str: &str) -> String {
    str.to_string()
        .split(" ")
        .map(|word| word.chars().rev().collect())
        .collect::<Vec<String>>()
        .join(" ")
}

// * my solution
// pub fn reverse_words(str: &str) -> String {
//     let mut result = String::from(str);
//     for word in str.split(" ") {
//         let reverse = word.chars().rev().collect::<String>();
//         result = result.replace(word, &reverse);
//     }
//     result
// }

#[cfg(test)]
mod tests {

    use super::*;

    #[test]
    fn test_punctuation() {
        assert_eq!(reverse_words("This is an example!"), "sihT si na !elpmaxe");
    }

    #[test]
    fn test_sentence() {
        assert_eq!(
            reverse_words("The quick brown fox jumps over the lazy dog."),
            "ehT kciuq nworb xof spmuj revo eht yzal .god"
        );
    }

    #[test]
    fn test_single_word() {
        assert_eq!(reverse_words("apple"), "elppa");
    }

    #[test]
    fn test_letters() {
        assert_eq!(reverse_words("a b c d"), "a b c d");
    }

    #[test]
    fn test_double_spaces() {
        assert_eq!(
            reverse_words("double  spaced  words"),
            "elbuod  decaps  sdrow"
        );
    }

    #[test]
    fn hard_test() {
        assert_eq!(
            reverse_words("ab   ba   cd"),
            "ba   ab   dc"
        );
    }
}
