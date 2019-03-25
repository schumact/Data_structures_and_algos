function power(base, exp){
    if (exp === 0) return 1;
    return base * power(base, (exp - 1));
}

function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num -1);
}

function productOfArray(arr) {
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

// function that accepts a number and adds up all
// the numbers from 0 to the number passed to the func
function recursiveRange(num) {
    if (num === 1) return 1;
    return num + recursiveRange(num -1);
}

function fib(arr, num) {
    if (arr.length === num) return arr[arr.length -1];
    arr.push(arr[arr.length -1] + arr[arr.length - 2]);
    return fib(arr, num);
}