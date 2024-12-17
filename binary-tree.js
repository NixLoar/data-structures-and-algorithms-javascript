class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (!this.root) {
            this.root = new TreeNode(value);
        } else {
            this._insertRecursive(this.root, value);
        }
    }

    _insertRecursive(node, value) {
        if (value < node.value) {
            if (!node.left) {
                node.left = new TreeNode(value);
            } else {
                this._insertRecursive(node.left, value);
            }
        } else {
            if (!node.right) {
                node.right = new TreeNode(value);
            } else {
                this._insertRecursive(node.right, value);
            }
        }
    }

    search(value) {
        return this._searchRecursive(this.root, value);
    }

    _searchRecursive(node, value) {
        if (!node) {
            return false;
        }
        if (value === node.value) {
            return true;
        }
        if (value < node.value) {
            return this._searchRecursive(node.left, value);
        } else {
            return this._searchRecursive(node.right, value);
        }
    }

    inorderTraversal() {
        const result = [];
        this._inorderRecursive(this.root, result);
        return result;
    }

    _inorderRecursive(node, result) {
        if (node) {
            this._inorderRecursive(node.left, result);
            result.push(node.value);
            this._inorderRecursive(node.right, result);
        }
    }

    toString() {
        return "In-order: " + this.inorderTraversal().join(", ");
    }
}

// Example

const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

console.log(tree.toString());
console.log(`Search 4: ${tree.search(4)}`);
console.log(`Search 10: ${tree.search(10)}`);
console.log(`Inorder Traversal: ${tree.inorderTraversal()}`);
