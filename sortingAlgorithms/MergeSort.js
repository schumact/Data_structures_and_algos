// input is two sorted arrays
function merge(arr1, arr2) {
    let new_arr = [];
    let i = 0;
    let j = 0;
        // compare index values for arr1 and arr2 to see which one is less
        // for the lesser value, incremenent the index on the respective arr
        // and compare the new index with the prior index on the other arr
        // once once array has len = 0, concat remaining elements of other arr
        // to new_arr
        while (i <= (arr1.length - 1) && j <= (arr2.length - 1)) {
            if (arr1[i] <= arr2[j]) {
                new_arr.push(arr1[i]);
                i++;
                // should remove element from smaller array here or increase i
            } else {
                new_arr.push(arr2[j]);
                j++;
            }
            if (i === arr1.length) {
                let arr = arr2.slice(j);
                new_arr = new_arr.concat(arr);
            }
            if (j === arr2.length) {
                let arr = arr1.slice(i);
                new_arr = new_arr.concat(arr);
            }
        }

    return new_arr;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let firstHalf = mergeSort(arr.slice(0 , Math.floor(arr.length / 2)));
    let secondHalf = mergeSort(arr.slice(Math.floor(arr.length / 2)));
    return merge(firstHalf, secondHalf);
}