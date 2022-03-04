// all the letters
// same length

export function anagrams(word, words) {

    function mapCharsAndSort(arr) {
        const letters = [...arr];
        return letters
            .map(letter => letter.charCodeAt(word[letter]))
            .sort((a, b) => a - b);
    }

    let result = [];

    const inital = mapCharsAndSort(word);

    for (const word of words) {
        const current = mapCharsAndSort(word);

        const doLengthsEqual = inital.length === current.length;
        const areCharsEqual = inital.every((value, index) => value === current[index]);

        if (doLengthsEqual && areCharsEqual) {
            result.push(word);
        }
    }

    console.log(result);
    return result;
}

anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]);
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
anagrams('laser', ['lazing', 'lazy',  'lacer']);
