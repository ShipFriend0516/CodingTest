const fs = require("fs");
const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
  const lines = input.split("\n").map((el) => el.trim());
  const [N, M, V] = lines[0].split(" ").map(Number);

  const graph = {};
  const dfsVisited = [];

  for (let i = 1; i <= M; i++) {
    const [start, end] = lines[i].split(" ").map(Number);
    if (!graph[start]) {
      graph[start] = [end];
    } else {
      graph[start].push(end);
    }

    if (!graph[end]) {
      graph[end] = [start];
    } else {
      graph[end].push(start);
    }
  }

  console.log(dfs(V, graph, dfsVisited));
  console.log(bfs(V, graph));
};

const bfs = (start, graph) => {
  const queue = [start];
  const visited = [];
  while (queue.length > 0) {
    const node = queue.shift();
    // 탐색 추적
    if (visited.includes(node)) {
      continue;
    } else {
      visited.push(node);
    }
    const nodes = graph[node] ? graph[node].sort((a, b) => a - b) : [];
    nodes.forEach((node) => queue.push(node));
  }

  return visited.join(" ");
};

const dfs = (node, graph, dfsVisited) => {
  dfsVisited.push(node);
  // 인접 노드
  const nodes = graph[node] ? graph[node].sort((a, b) => a - b) : [];
  for (const node of nodes) {
    if (!dfsVisited.includes(node)) dfs(node, graph, dfsVisited);
  }

  return dfsVisited.join(" ");
};

solution(input);
