function findLongestSubstring(str) {
    let strObj = {};
    let maxLength = 0;
    let start = 0;
    let end = 0;
    let current = 0;
    while(end <= str.length) {
        let letter = str[end];
        strObj[letter] = (strObj[letter] || 0) + 1;
        if (strObj[letter] > 1) {
            for (let key in strObj) {
                strObj[key] = 0;
            }
            maxLength = Math.max(current, maxLength);
            current = 0;
            start++;
            end= start;
        } else {
            console.log(letter);
            end++;
            if (end > str.length){

            }
            else 
            {
               current++; 
            }
        }
        maxLength = Math.max(current, maxLength);
    }
    return maxLength;
}