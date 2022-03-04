
fn calculate_annual_population(pop: i32, per: f64, dif: i32) -> i32 {
  let result = pop as f64 + (pop as f64 * per) + dif as f64;
  result as i32
}

fn nb_year(p0: i32, percent: f64, aug: i32, p: i32)-> i32 {
    let mut n = 0;
    let mut current_pop = p0;
    let percent = percent / 100.00;
    
    loop {
        if current_pop >= p {
            break;
        } else {
            current_pop = calculate_annual_population(current_pop, percent, aug);
            n += 1;
            continue; 
        }
    }
    n
}

fn main() {
    let ans = nb_year(1500, 5.0, 100, 5000);
    let exp = 15;
    println!("actual:\n{:?};", ans);
    println!("expect:\n{:?};", exp);
    println!("{};", ans == exp);
    assert_eq!(ans, exp);
}
