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

    extractMax() {
        let parent = this.values[0]; 
        this.values[0] = this.values[this.values.length - 1];
        this.values.pop();
        let parent_index = 0;
        function sink_down(parent_indx, arr) {
            let parent = arr[parent_indx];
            let left_index = 2 * parent_indx + 1;
            let right_index = 2 * parent_indx + 2;
            let left_child = arr[left_index];
            let right_child = arr[right_index];
            let larger_index;
            if (left_child == null) {
                return arr;
            } else if (right_child == null) {
                larger_index = left_index;
            } else if (left_child > right_child) {
                larger_index = left_index;
            } else {
                larger_index = right_index;
            }
            if (arr[larger_index] > parent) {
                let temp = arr[larger_index];
                arr[larger_index] = parent;
                arr[parent_indx] = temp;
                return sink_down(larger_index, arr);
            }
            return arr;
        }
        let arr = sink_down(parent_index, this.values);
        this.values = arr;
        return parent;
    }
}

heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.extractMax();
// heap.extractMax();
// heap.extractMax();
// heap.extractMax();
// heap.extractMax();
// heap.extractMax();
// heap.extractMax();
console.log(heap);