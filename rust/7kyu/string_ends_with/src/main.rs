/* Complete the solution so that it
returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false */

fn main() {
    // println!("{:#?}", solution("abc", "c"));
    // println!("{:#?}", solution("strawberry", "banana"));

    assert_eq!(true, solution("abc", "c"));
    assert_eq!(false, solution("strawberry", "banana"));
}

fn solution(word: &str, ending: &str) -> bool {
    // let ending_length = ending.len();
    // let word_length = word.len();
    // let range = word_length - ending_length;
    // let sliced_word = &word[range..];
    
    if word.ends_with(ending) {
        true
    } else {
        false
    }
}