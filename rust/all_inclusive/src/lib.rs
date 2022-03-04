fn give_all_rotations(s: &str) -> Vec<String> {
    let mut result: Vec<String> = Vec::with_capacity(s.len());
    let mut word_vec: Vec<char> = s.chars().collect();
    for _ in 0..s.len() {
        word_vec.rotate_right(1);
        let rotated = word_vec.iter().collect::<String>();
        result.push(rotated);
    }
    println!("result is: {:#?}", result);
    result
}

fn contain_all_rots(strng: &str, arr: Vec<&str>) -> bool {
    let rotations = give_all_rotations(strng);
    rotations.iter().all(|rotation| arr.contains(&&rotation[..]))
}

#[cfg(test)]
    mod tests {
    use super::*;

    fn dotest(strng: &str, arr: Vec<&str>, exp: bool) -> () {
        println!("strng: {}", strng);
        println!("arr: {:?}", arr);
        let ans = contain_all_rots(strng, arr);
        println!("actual:\n{}", ans);
        println!("expect:\n{}", exp);
        println!("{}", ans == exp);
        assert_eq!(ans, exp);
        println!("{}", "-");
    }

    #[test]
    fn xjy() {
        dotest("XjYABhR", vec!["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"], false);
    }

    #[test]
    fn ajylvpy() {
        dotest("Ajylvpy", vec!["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"], false);
    }
    
    #[test]
    fn empty() {
        dotest("", vec![], true);      
    }
    
    #[test]
    fn bsjq() {
        dotest("bsjq", vec!["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"], true);
    }

    #[test]
    fn etsshp() {
        dotest("Etsshp", vec!["nVOETcaxdvuk", "shpEts", "hpEtss", "Etsshp", "OuIiQ", "sXrDdPXIaW", "tsshpE", "pEtssh"], false);
    }

    #[test]
    fn wluezkgly() {
        dotest("wlUeZKgLY", vec!["eZKgLYwlU", "gLYwlUeZK", "eNKRvmhis", "lUeZKgLYw", "ZKgLYwlUe", "YwlUeZKgL", "LYwlUeZKg", "wlUeZKgLY", "KgLYwlUeZ"], false);
    }

    #[test]
    fn tvool3ltb() {
        dotest("TvooL3LtB", vec!["BTvooL3Lt", "3LtBTvooL", "vooL3LtBT", "L3LtBTvoo", "oL3LtBTvo", "lEWdlotzl", "ooL3LtBTv", "tBTvooL3L", "LtBTvooL3"], false);
    }
}