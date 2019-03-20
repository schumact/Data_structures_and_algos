// write a func that accepts two parameters - positive array
// and a positive integer. return the minimal length of a 
// contiguous subarray where the sum is >= integer passed in. 

function minSubArrayLen(arr, num) {
    if (num < 0) {
        console.log('number received is less than 0');
        return 0;
    }
    for (let i of arr) {
        if (i < 0 || typeof i !== 'number') {
            console.log("Array does not contain all positive integers")
        }
    }

    let start = 0;
    let point2 = 1;
    let sum = 0;
    let end = arr.length - 1;
    let lastPoint2 = 1;
    let minimalLength = 2;

    while (sum < num) {
        sum = arr[start] + arr[point2];
        if (point2 === end) {
            start = 0;
            point2 = lastPoint2 + 1;
            lastPoint2++;
            minimalLength++;
        } else {
            console.log(`start index is ${start} and end index is ${point2}. sum is ${sum}`)
            start++;
            point2++;
        }
    }
    return minimalLength;
}