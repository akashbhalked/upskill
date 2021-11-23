/**
 * Given two string, write a function to determine if the second string is anagram of first string.
 * An anagram is a word formed by rearranging the alphabets in string
 * Example iceman : cinema
 */
function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }
    const lookup = {};
    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}
console.log(validAnagram("iceman", "cinema"))