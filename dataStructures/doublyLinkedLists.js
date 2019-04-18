class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class doublyLinkedList {
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
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let currentTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = currentTail.prev;
            this.tail.next = null;
            currentTail.prev = null;
        }
        this.length--;
        // console.log(this);
        // console.log(currentTail);
        return currentTail; // return popped value
    }

    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return currentHead;
        }
        this.head = currentHead.next;
        this.head.prev = null;
        currentHead.next = null;
        this.length--;
        return currentHead;
    }

    unshift(val) {
        var newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            return ;
        }
        let currentHead = this.head;
        currentHead.prev = newNode;
        newNode.next = currentHead;
        this.head = newNode;
        this.length++;
        return this;
    }

    get(indx) {
        if (indx < 0 || indx >= this.length) return null;
        let middle = Math.floor(this.length / 2);
        var count, current;
        if (indx < middle) {
            count = 0;
            current = this.head;
            while (count !== indx) {
                current = current.next;
                count++;
            }
            return current;   
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== indx) {
                current = current.prev;
                count--;
            }
            return current;   
        }
    }

    set(index, val) {
        let currentNode = this.get(index);
        if (!currentNode) return false;
        currentNode.val = val;
        return true
    }

    insert(index, val) {
        let CurrentIndexNode = this.get(index);
        if (!CurrentIndexNode) return false;
        if (index === 0) return this.unshift();
        if (index === this.length) return this.push();
        let newNode = new Node(val);
        let oldPrev = CurrentIndexNode.prev;
        oldPrev.next = newNode, CurrentIndexNode.prev = newNode;
        newNode.next = CurrentIndexNode, newNode.prev = oldPrev;
        this.length++;
        console.log(this);
        return true;
    }

    remove(index) {
        let CurrentIndexNode = this.get(index);
        if (!CurrentIndexNode) return false;
        if (index === 0) return this.shift();
        if (index === (this.length - 1)) return this.pop();
        let prevNode = CurrentIndexNode.prev;
        let nextNode = CurrentIndexNode.next;
        prevNode.next = next, nextNode.prev = prevNode;
        CurrentIndexNode.next = null, CurrentIndexNode.prev = null;
        this.length--;
        return CurrentIndexNode;
    }

}

let list = new doublyLinkedList();
// list.push(11);
// list.push(12);
// list.push(13);
// list.push(14);