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