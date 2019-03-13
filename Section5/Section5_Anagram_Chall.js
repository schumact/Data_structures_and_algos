// Frequency Counter Anagram Challenge
// O(n). No nested loops
const anagram = (string1, string2) => {
    if (string1.length !== string2.length) {
        return false;
    }
    
    let string1obj = {};
    let string2obj = {};

    for (let char of string1) {
        string1obj[char] = (string1obj[char] || 0) + 1;
    }
    for (let char of string2) {
    string2obj[char] = (string2obj[char] || 0) + 1;
    }

    for (let key in string1obj) {
        if (!(key in string2obj)) {
            return false;
        }
        if (string1obj[key] !== string2obj[key]) {
            return false;
        }
    }
    return true;
};