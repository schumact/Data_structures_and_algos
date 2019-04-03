function selectionSort(arr) {
    let new_min_index;
    for (let i = 0; i < arr.length -1; i++){
        new_min_index = i;
        for (let j = i; j < arr.length -1; j++) {
            if (arr[j+1] < arr[j]) {
                new_min_index = j + 1;
            }
        }
        if (new_min_index != i) {
            swap(arr, i, new_min_index);
        }
    }
    return arr;
}

function swap(arr, indx1, indx2) {
    let temp = arr[indx1];
    arr[indx1] = arr[indx2];
    arr[indx2] = temp;
}