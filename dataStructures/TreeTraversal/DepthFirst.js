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

    DFS_Preorder() {
        // depth first search preorder search
        let visited = [];
        if (!this.root) return null;
        function search(root) {
            visited.push(root.val);
            if (root.left) search(root.left);
            if (root.right) search(root.right);
        }
        search(this.root);
        console.log(visited);
        return visited;
    }

    DFS_PostOrder() {
        // depth first search preorder search
        let visited = [];
        if (!this.root) return null;
        function search(root) {
            if (root.left) search(root.left);
            if (root.right) search(root.right);
            visited.push(root.val);
        }
        search(this.root);
        console.log(visited);
        return visited;
    }

    DFS_InOder() {
        // depth first search preorder search
        let visited = [];
        if (!this.root) return null;
        function search(root) {
            if (root.left) search(root.left);
            visited.push(root.val);
            if (root.right) search(root.right);
        }
        search(this.root);
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
t.insert(6);
t.insert(11);
// t.DFS_Preorder();
// t.DFS_PostOrder();
t.DFS_InOder();

//        10
//    8         12
//   5  9         15
//   4