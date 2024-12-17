class Stack {
    constructor() {
        this.stack = [];
    }

    push(item) {
        this.stack.push(item);
    }

    pop() {
        if (this.isEmpty()) {
            return "empty stack";
        }
        return this.stack.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return "empty stack";
        }
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }
}

// Example

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(`Stack after pushing: ${stack.stack}`);
console.log(`Let's take a peek on the top: ${stack.peek()}`);
console.log(`Popped item: ${stack.pop()}`);
console.log(`Stack after popping: ${stack.stack}`);
console.log(`Is stack empty? ${stack.isEmpty()}`);