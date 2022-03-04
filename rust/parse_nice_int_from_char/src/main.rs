use parse_nice_int_from_char::get_age;

fn bool_to_word(value: bool) -> &'static str {
    match value {
        true => "Yes",
        _ => "No"
    }
}

fn main() {
    println!("{}", get_age("2 years old"));

    println!("should print yes: {}", bool_to_word(true));
    println!("should print no: {}", bool_to_word(false));
}