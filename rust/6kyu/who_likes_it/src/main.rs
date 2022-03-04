pub fn likes(names: &[&str]) -> String {
    let length = names.len();
    let message = match length {
        0 => format!("no one likes this"),
        1 => format!("{} likes this", &names[0]),
        2 => format!("{} and {} like this", &names[0], &names[1]),
        3 => format!("{}, {} and {} like this", &names[0], &names[1], &names[2]),
        _ => format!("{}, {} and {} others like this", &names[0], &names[1], length - 2),
    };
    message
}

fn main() {
    println!("Hello, who likes it codewars chalenge!");
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn no_one() {
        assert_eq!(likes(&[]), "no one likes this");
    }

    #[test]
    fn one_like() {
        assert_eq!(likes(&["Peter"]), "Peter likes this");
    }

    #[test]
    fn two_likes() {
        assert_eq!(likes(&["Jacob", "Alex"]), "Jacob and Alex like this");
    }

    #[test]
    fn three_likes() {
        assert_eq!(
            likes(&["Max", "John", "Mark"]),
            "Max, John and Mark like this"
        );
    }

    #[test]
    fn four_likes() {
        assert_eq!(
            likes(&["Alex", "Jacob", "Mark", "Max"]),
            "Alex, Jacob and 2 others like this"
        );
    }
}
