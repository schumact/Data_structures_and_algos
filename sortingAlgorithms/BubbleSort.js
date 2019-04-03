// takes in an array of numbers
function BubbleSort(arr) {
    var noSwaps;
    for (let i = arr.length -1; i >= 0; i--) {
        noSwaps = true;
        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, (j + 1));
                noSwaps = false;
            }
        }
        if (noSwaps) {
            console.log('no swaps');
            break;
        }
    }

    return arr;
}

function swap(arr, indx1, indx2) {
    let temp = arr[indx1];
    arr[indx1] = arr[indx2];
    arr[indx2] = temp;
}