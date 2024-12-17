const Graph = require('./graph');
const dfs = require('./dfs');
const bfs = require('./bfs');

const graph = new Graph();

graph.addnode('A');
graph.addnode('B');
graph.addnode('C');
graph.addnode('D');
graph.addnode('E');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');

console.log("DFS starting from A:", dfs(graph, 'A'));

console.log("BFS starting from A:", bfs(graph, 'A'));