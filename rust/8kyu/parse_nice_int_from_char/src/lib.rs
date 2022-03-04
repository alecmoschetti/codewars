pub fn get_age(age: &str) -> u32 {
    age
        .chars()
        .next()
        .unwrap()
        .to_digit(10)
        .unwrap()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn two() {
        assert_eq!(get_age("2 years old"), 2);
    }

    #[test]
    fn four() {
        assert_eq!(get_age("4 years old"), 4);
    }

    #[test]
    fn five() {
        assert_eq!(get_age("5 years old"), 5);
    }

    #[test]
    fn seven() {
        assert_eq!(get_age("7 years old"), 7);
    }
}
