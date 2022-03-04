fn square_sum(vec: Vec<i32>) -> i32 {
    let mut total = 0;

    for n in vec.iter() {
        total += n.pow(2);
    }

    total
}

fn main() {
    assert_eq!(square_sum(vec![1, 2]), 5);
    assert_eq!(square_sum(vec![-1, -2]), 5);
    assert_eq!(square_sum(vec![5, 3, 4]), 50);
}
