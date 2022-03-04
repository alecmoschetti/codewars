// The goal of this exercise is to convert a string to a new string 
// where each character in the new string is "(" 
// if that character appears only once in the original string,
// or ")" if that character appears more than once in the original string. 
// Ignore capitalization when determining if a character is a duplicate.

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

use std::collections::HashMap;

fn main() {
    fn duplicate_encode(word: &str) -> &str {
        let mut map_of_chars = HashMap::new();
        for mut char in word.to_ascii_lowercase().chars() {
            let count = map_of_chars.entry(char).or_insert(0);
            *count += 1;
            println!("{}", count);
            if count == &2 {
                char = ')';
            } else {
                char = '(';
            }
            println!("{}", char);
            println!("{}", word);
        }
        println!("{}", word);
        word
    }

    assert_eq!(duplicate_encode("din"),"(((");
    assert_eq!(duplicate_encode("recede"),"()()()");
    assert_eq!(duplicate_encode("Success"),")())())","should ignore case");
    assert_eq!(duplicate_encode("(( @"),"))((");
}
