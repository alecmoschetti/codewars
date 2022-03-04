fn main() {
    disemvowel("This website is for losers LOL!");
}

fn disemvowel(s: &str) -> String {
    for character in s.bytes(){
        println!("{}", character);
    }
    String::from(s)
}

