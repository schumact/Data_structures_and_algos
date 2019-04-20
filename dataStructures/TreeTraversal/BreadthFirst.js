class Node{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    // using insert statement from BinarySearchTree
    constructor() {
        this.root = null;
    }
    insert(val) {
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        function new_search(root) {
            let currentRoot = root;
            if (newNode.val > currentRoot.val) {
                if (!currentRoot.right){
                    currentRoot.right = newNode;
                } else {
                    currentRoot = currentRoot.right;
                    new_search(currentRoot);
                }
            } else {
                if (!currentRoot.left) {
                    currentRoot.left = newNode;
                } else {
                    currentRoot = currentRoot.left;
                    new_search(currentRoot);
                }
            }
            return currentRoot;
        }

        return new_search(this.root);
    }

    BFS() {
        var queue = [];
        var visited = [];
        if (!this.root) return null;
        queue.push(this.root);
        while (queue.length > 0) {
            if (queue[0].left) {
                queue.push(queue[0].left);
            }
            if (queue[0].right) {
                queue.push(queue[0].right);
            }
            let firstOut = queue.shift();
            visited.push(firstOut.val);
        }
        console.log(visited);
        return visited;
    }
}

t = new Tree();
t.insert(10);
t.insert(8);
t.insert(12);
t.insert(15);
t.insert(9);
t.insert(5);
t.insert(4);
t.BFS();