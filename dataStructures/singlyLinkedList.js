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
        // remove val from beginning of list
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

    // retrieve a node by it's position in the list
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let tempIndex = 0;
        let current = this.head;
        while (tempIndex !== index) {
            current = current.next;
            tempIndex++;
        }
        // console.log(current);
        return current;
    }

    set(index, val) {
        let getIndex = this.get(index);
        if (!getIndex) return false;
        getIndex.val = val;
        return true;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        let newNode = new Node(val);
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);
        let previous = this.get(index - 1);
        let current = previous.next;
        previous.next = newNode;
        newNode.next = current;
        this.length++;
        return true; 
    }

    remove(index) {
        if (index < 0 || index >= this.length) return null;
        if (index === this.length -1) return this.pop();
        if (index === 0) return this.shift();
        let previous = this.get(index - 1);
        let toBeRemoved = previous.next;
        previous.next = toBeRemoved.next;
        this.length--;
        return toBeRemoved;
    }
    
    reverse() {
        // was a bit confusing at first
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        var prev = null;
        var next;
        for (var i=0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

}

var list = new SinglyLinkedList();
list.push('HI');
list.push("there");
list.push("!");
// list.pop();
// list.unshift("First");
list.insert(2, "Billy");
list.insert(0, 'WOAHHHH');
console.log(list.remove(2));

    // var first = new Node("Hi");
    // first.next = new Node("there");
    // first.next.next = new Node("how");
    // first.next.next.next = new Node("are");
    // first.next.next.next.next = new Node("You");
