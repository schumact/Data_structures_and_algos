class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    find(val) {
        if (!this.root) return null;
        if (this.root.val === val) return true;
        function search(root) {
            if (root.val === val) {
                return true;
            }
            if (val > root.val) {
                if (!root.right) {
                    return false;
                } else {
                    search(root.right);
                }
            } else {
                if (!root.left) {
                    return false;
                } else {
                    search(root.left);
                }
            }

        }
        return search(this.root);

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

}

var t = new BinarySearchTree();
t.root = new Node(10);
console.log(t);
t.insert(12);
t.insert(4);
t.insert(3);
console.log(t);
t.find(12);
