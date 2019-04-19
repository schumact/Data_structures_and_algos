// we are adding from the beginning so we can 
// achieve constant time. In a singly linked list,
// popping from the end was not O(1)7/0

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        return ++this.size;

    }

    pop() {
        if (!this.first) return null;
        let currentFirst = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else 
        {
            this.first = currentFirst.next;
            currentFirst.next = null;
        }
        this.size--;
        console.log(currentFirst.val);
        return currentFirst.val;
    }

}

// var stack = new Stack();
// stack.push("First");
// stack.push("Second");
// stack.push("Third");
// stack.pop();
// stack.pop();
// stack.pop()
// console.log(stack);

