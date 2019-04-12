function quickSort(arr, left=0, right=arr.length -1) {
    if (left < right) {
        let pivot_index = pivot(arr, left, right);
        quickSort(arr, left, pivot_index - 1);
        quickSort(arr, pivot_index + 1, right);
    }
    return arr;
}

function pivot(arr, start=0, end=arr.length + 1) {
    // for the element at arr[start], move every other element
    // in the array that is less than it to the left of arr[start]
    let pivot = arr[start];
    let pivot_index = start;
    for (let i = start + 1; i <= arr.length -1; i++) {
        if (arr[i] < pivot) {
            pivot_index++;
            swap(arr,pivot_index, i);
        } 
    }
    swap(arr, start, pivot_index);
    return pivot_index;
}

function swap(arr, indx1, indx2) {
    let temp = arr[indx1];
    arr[indx1] = arr[indx2];
    arr[indx2] = temp;
}
