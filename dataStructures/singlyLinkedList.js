// define what a singly linked list is
// compare and contrast linked lists with array
// implement insertion, removal, and traversal methods on singly linked lists

// WHAT IS IT?
// ordered data structure (ordered)
// linked lists consist of nodes, and each node has a value and a pointer to another node or null

// a node stores a piece of data - val
// and a reference to next node = next
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        // set this.tail equal to the new tail
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) {
        // add new value to head of list
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

}

var list = new SinglyLinkedList();
console.log(list);
// list.push('HI');
// list.push("there");
// list.push("!");
// list.pop();
list.unshift("First");
console.log(list);

    // var first = new Node("Hi");
    // first.next = new Node("there");
    // first.next.next = new Node("how");
    // first.next.next.next = new Node("are");
    // first.next.next.next.next = new Node("You");
