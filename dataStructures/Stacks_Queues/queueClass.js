class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        let currentFirst = this.first;
        if (!this.first) return null;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = currentFirst.next;
            currentFirst.next = null;
        }
        this.size--;
        return currentFirst.val;
    }
}

var q = new Queue();
q.enqueue("FIRST");
q.enqueue("SECOND");
q.enqueue("THIRD");
q.dequeue()
console.log(q)
