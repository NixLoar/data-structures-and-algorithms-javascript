class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAtEnd(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    insertAfterNode(prevData, data) {
        let current = this.head;
        while (current && current.data !== prevData) {
            current = current.next;
        }
        if (!current) {
            return `${prevData} not found.`;
        }
        const newNode = new Node(data);
        newNode.next = current.next;
        current.next = newNode;
    }

    deleteNode(key) {
        let current = this.head;

        if (current && current.data === key) {
            this.head = current.next;
            return;
        }

        let prev = null;
        while (current && current.data !== key) {
            prev = current;
            current = current.next;
        }

        if (!current) {
            return `${key} not found.`;
        }

        prev.next = current.next;
    }

    traverse() {
        const result = [];
        let current = this.head;
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }

    toString() {
        let result = [];
        let current = this.head;
        while (current) {
            result.push(current.data.toString());
            current = current.next;
        }
        return result.length ? result.join(" -> ") : "Empty List";
    }
}

// Example

const linkedList = new LinkedList();
linkedList.insertAtBeginning(10);
linkedList.insertAtEnd(20);
linkedList.insertAtEnd(30);
linkedList.insertAfterNode(20, 25);

console.log("Linked List after insertions:");
console.log(linkedList.toString());

console.log("\nTraversed List:");
console.log(linkedList.traverse());

linkedList.deleteNode(25);
console.log("\nLinked List after deletion:");
console.log(linkedList.toString());
