// linearSearch
function linearSearch(arr, value) {
    for (let i = 0; i <= arr.length -1; i++) {
        if (arr[i] === value) return i; // return index
    }
    return -1;
}

// binary search with sorted array
function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length -1;
    if (val > arr[end]) return -1;
    if (val < arr[start]) return -1;

    while (start < end) {
        let middle = Math.round((end + start) / 2);
        if (arr[start] === val) return start;
        if (arr[end] === val) return end;
        if (arr[middle] === start) return middle;
        if (val < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return -1;
}

// naive string search
function stringSearch(str, subString) {
    let count = 0;
    for (let char = 0; char <= str.length -1; char++) {
        let temp_char = char;
        for (let letter = 0; letter <= subString.length - 1; letter++) {
            if (subString[letter] === str[temp_char]){ // cleaner to write, if (str[char] !== subString[char + letter]) break;
                temp_char++;
            } else break;
            if (letter === subString.length -1) {
                count++;
            }
        }
    }
    return count;
}
