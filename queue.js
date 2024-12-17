class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Empty queue";
        }
        return this.queue.shift();
    }

    peek() {
        if (this.isEmpty()) {
            return "Empty queue";
        }
        return this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    size() {
        return this.queue.length;
    }
}

// Example

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(`Queue after enqueuing: ${queue.queue}`);
console.log(`Front item: ${queue.peek()}`);
console.log(`Dequeued item: ${queue.dequeue()}`);
console.log(`Queue after dequeuing: ${queue.queue}`);
console.log(`Is queue empty? ${queue.isEmpty()}`);