class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addnode(node) {
        if (!this.adjList.has(node)) {
            this.adjList.set(node, []);
        }
    }

    addEdge(v1, v2) {
        if (!this.adjList.has(v1)) {
            this.addnode(v1);
        }
        if (!this.adjList.has(v2)) {
            this.addnode(v2);
        }
        this.adjList.get(v1).push(v2);
        this.adjList.get(v2).push(v1); 
    }

    getAdjList() {
        return this.adjList;
    }
}

module.exports = Graph;