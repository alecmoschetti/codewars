pub fn dna_strand(dna: &str) -> String {
    let mut result = String::new();
    for c in dna.to_uppercase().chars() {
        match c {
            'A' => result.push('T'),
            'T' => result.push('A'),
            'C' => result.push('G'),
            'G' => result.push('C'),
            _ => panic!("dna str doesn't seem to be valid dna."),
        }
    }
    result
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn basic() {
        assert_eq!(dna_strand("AAAA"), String::from("TTTT"));
        assert_eq!(dna_strand("ACAT"), String::from("TGTA"));
        assert_eq!(dna_strand("ATGC"), String::from("TACG"));
    }
}
