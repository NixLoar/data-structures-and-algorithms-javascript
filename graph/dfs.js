function dfs(graph, start) {
    const visited = new Set();
    const result = [];

    function explore(node) {
        if (!visited.has(node)) {
            visited.add(node);
            result.push(node);
            for (const neighbor of graph.getAdjList().get(node)) {
                explore(neighbor);
            }
        }
    }

    explore(start);
    return result;
}

module.exports = dfs;