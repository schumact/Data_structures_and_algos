// give a sorted array of integers and a target average
// determine if there is a pair of values in the array
// where the average of the pair equals the target average

function averagePair(arr, target_num){
    let point1 = 0;
    let average = 0;
    let count = 0;


    for (; point1 <= arr.length -1;point1++) {
        let point2 = point1 + 1;
        for (; point2 <= arr.length -1; point2++){
            console.log('point 1: ', arr[point1]);
            console.log('point 2 ', arr[point2]);
            if ((arr[point1] + arr[point2]) / 2 === target_num) {
                average = (arr[point1] + arr[point2]) / 2;
                console.log(`Found a match: ${arr[point1]} and ${arr[point2]} left me with ${(arr[point1] + arr[point2]) / 2}`);
                count ++;
            }
        }
    }
    return count;
  }

  averagePair([1,2,3,4,5], 2);