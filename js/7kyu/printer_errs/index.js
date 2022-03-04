// @ printer errors

export function printerError(s) {
    let errors = [];
    for (const letter of s) {
        if (letter >= 'n') {
            errors.push(letter);
        }
    }
    return `${errors.length}/${s.length}`;
}
