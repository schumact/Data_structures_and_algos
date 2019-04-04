function insertionSort(arr) {
    for (let i = 1; i <= arr.length - 1; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) swap(arr, j, (j -1));
            else break;
        }
    }
    return arr;
}

function swap(arr, indx1, indx2) {
    let temp = arr[indx1];
    arr[indx1] = arr[indx2];
    arr[indx2] = temp;
}