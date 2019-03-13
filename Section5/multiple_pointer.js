// function countUniqueValues that accpets a sorted array and 
// loops through the array with O(n) time complexity and returns
// a count with the different number of elements

const countUniqueValues = (sortedArr) => {
    let pointer1 = 0;
    let pointer2 = 1;
    let count = 1;
    for (pointer2; pointer2 <= arr.length - 1;){
        if (arr[pointer2] === arr[pointer1]) {
            
        } else {
            pointer1 = pointer2;
            count++;
        }
        pointer2++;
    }
    console.log('count: ', count);
}