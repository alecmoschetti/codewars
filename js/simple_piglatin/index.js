export function pigIt(str) {
    let split = str.split(' ');
    let pigged = split.map(word => {
        let chars = word.split('');
        if (chars.every(char => char.match(/[a-z]/i))) {
            let first = chars.shift();
            chars.push(first, 'a', 'y');
            word = chars.join('');
        }
        return word;
    });
    return pigged.join(' ');
}
