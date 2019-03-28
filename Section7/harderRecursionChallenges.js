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
    else if (str[0] === str[str.length -1]) {
        return isPalindrome(str.slice(1,-1))
    } else{
        return false;
    }
}