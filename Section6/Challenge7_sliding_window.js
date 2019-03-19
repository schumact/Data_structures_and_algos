// given an array and a number, write a func that finds the max sub array with 
// the length of the number passed to the function. Subarray must consist of 
// consecutive elements

function maxSubarraySum(arr, num) {
    let point1 = 0;
    let point2 = point1 + (num -1);
    var current_max = 0;
    if (num > arr.length) return -1;

    while (point2 <= arr.length -1) {
        let pt1 = point1;
        let pt2 = point2;
        let new_max = 0;
        for (;pt1 <= pt2;pt1++){
            new_max += arr[pt1];
        }
        current_max = Math.max(current_max, new_max);
        point1 ++;
        point2++;
    }
    return current_max;
}