function bfs(graph, start) {
    const visited = new Set();
    const queue = [start];
    const result = [];

    visited.add(start);

    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node);

        for (const neighbor of graph.getAdjList().get(node)) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    return result;
}

module.exports = bfs;