// integer sort, not a comparison sort
// pseudo code was supplied. Code was written by me.

function getDigit(num, dig) {
    let str_repr = num.toString();
    let digit = str_repr.charAt(str_repr.length - (dig + 1));
    if (digit === "") return "0";
    return digit;
}

function digitCount(dig) {
    let str_dig = dig.toString();
    return str_dig.length;
}

function mostDigits(arr) {
    let max_count = 0;
    for (let element of arr) {
        let digit_count = digitCount(element);
        if (digit_count > max_count) max_count = digit_count;
    }
    return max_count;
}

function radixSort(arr) {
    let max_digits = mostDigits(arr);
    // each time through loop, create an array with 10 sub arrays (0 - 9)
    for (let i = 0; i <= max_digits - 1; i++) {
        let bucket_arr = Array.from({length: 10}, () => []); //Array.from() lets you create Arrays from: array-like objects (objects with a length property and indexed elements)
        for (let element of arr) {
            let digit = getDigit(element, i);
            bucket_arr[digit].push(element);
        }
        arr = [].concat(...bucket_arr);
    }
    return arr;
}