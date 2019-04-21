class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        let arr = this.values;
        function bubbleUp(num_index, arr) {
            let parent_index;
            if (num_index === 1 || num_index === 0) {
                parent_index = 0;
            } else { 
                parent_index = Math.floor((num_index - 1) / 2);
            }
            if (arr[num_index] > arr[parent_index]) {
                // swap
                let temp = arr[num_index];
                arr[num_index] = arr[parent_index];
                arr[parent_index] = temp;
                return bubbleUp(parent_index, arr);
            } else return;
        }
        bubbleUp(this.values.length - 1, arr);
        this.values = arr;
        return this.values;
    }
}

t = new MaxBinaryHeap();
t.insert(10);
t.insert(15);
t.insert(4);
t.insert(18);
t.insert(6);
t.insert(9);
console.log(t);