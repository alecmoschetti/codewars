
fn convert_to_hms(t: i32) -> Vec<i32> {
    let hours = (t / 60) / 60;
    let minutes = (t / 60) % 60;
    let seconds = t % 60;
    vec![hours, minutes, seconds]
}

fn race(v1: i32, v2: i32, g: i32) -> Option<Vec<i32>> {
    let catch = v2 >= v1;
    if catch {
        let seconds = (3600 * g) / (v2 - v1);
        let hms = convert_to_hms(seconds);
        Some(hms)
    } else {
        None
    }
}

//    vec![f32::floor(t / 3600.) as i32, (f32::floor(t * 60.0) % 60.0) as i32, (f32::floor(t * 3600.) % 60.) as i32]
// let delta_velocity = v2 - v1;
// let decimal_hours = g as f32 / delta_velocity as f32;
fn main() {
    println!("Hello, world!");
    let race_results = race(720, 850, 70);
    println!("race results: {:?}", race_results);
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn tortoise_race() {
        assert_eq!(race(720, 850, 70), Some(vec![0, 32, 18]));
        assert_eq!(race(80, 100, 40), Some(vec![2, 0, 0]));
        assert_eq!(race(80, 91, 37), Some(vec![3, 21, 49]));
        assert_eq!(race(820, 81, 550), None);
    }
}

/* 
How to convert decimal hours to time format
Convert 2.88 hours to hh:mm:ss

2.88 hours can be broken down to 2 hours plus 0.88 hours - 2 hours
0.88 hours * 60 minutes/hour = 52.8 minutes - 52 minutes
0.8 minutes * 60 seconds/minute = 48 seconds - 48 seconds
02:52:48
*/
