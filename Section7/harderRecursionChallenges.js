// reverse str. 
function reverse(str, new_str) {
    if (str === '') return new_str;
    else {
        new_str = new_str.concat(str.split('').pop());   
        str = str.slice(0,-1);
        return reverse(str, new_str);
    }
}

// return true if the string passed to 
// the func is a palindrome else return false
function isPalindrome(str) {
    if (str.length === 0) return true;
    if (str[0] === str[str.length -1]) return isPalindrome(str.slice(1,-1)); 
    return false;
}

// recursivefunc that accepts an array and a callback
// returns true if a single value in the array 
// returns true when passed to the callback. Otherise
// it returns false
function someRecursive(arr, callback) {
    if (arr.length === 0) return false;
    if (callback(arr[0])) return true;
    return someRecursive(arr.slice(1), callback);
}

// recursive func that accepts an array of arrays
// and returns a new array with all values flattened
function flatten(arr){
    let new_arr = []
        for(let i = 0; i < arr.length; i++){
          if(Array.isArray(arr[i])){
                new_arr = new_arr.concat(flatten(arr[i]))
          } else {
                new_arr.push(arr[i])
          }
    } 
    return new_arr;
  }

// cleaner solution for reverse()
// function reverse(str){
// 	if(str.length <= 1) return str;
// 	return reverse(str.slice(1)) + str[0];
// }

// given an array of strings, capitalize the first letter
// of each string in the array
function capitalizeFirst(arr, new_arr) {
    if (arr.length === 0) return new_arr;
   	let str = arr.pop();
   	new_arr.push(str.replace(str[0], str[0].toUpperCase()));
   	return capitalizeFirst(arr, new_arr);
}

// return the sum of all even numbers in an object which
// may contain nested objects
function nestedEvenSum(obj) {
    let sum = 0;
    for (let i in obj) {
        if (typeof obj[i] === "number" && obj[i] % 2 === 0) sum += obj[i];
        if (typeof obj[i] === 'object') sum += nestedEvenSum(obj[i]);
    }
    return sum;
}

// given an array of words, return a new array
// containing each word capitalized
function capitalizeWords(arr, new_arr) {
    if (arr.length === 0) return new_arr;
    let str = arr.pop();
    new_arr.push(str.toUpperCase());
    return capitalizeWords(arr, new_arr);
}

// takes an obj and finds all the values which are numbers
// and converts them to strings
function stringifyNumbers(obj) {
    for (let i in obj) {
        if (typeof obj[i] === "number") obj[i] = obj[i].toString();
        if (typeof obj[i] === "object") stringifyNumbers(obj[i]);
    }
    return obj;
}

// return an array of string gather from nested object
function collectStrings(obj) {
    let arr = [];
    for (let i in obj) {
        if (typeof obj[i] === 'string') arr.push(obj[i]);
        if (typeof obj[i] === 'object') arr.concat(collectStrings(obj[i]));
    }
    return arr;
}