const fs = require("fs");
const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
  const lines = input.split("\n").map((el) => el.trim());

  const [count, pairsCount, pairs] = [
    +lines.at(0),
    +lines.at(1),
    lines.slice(2),
  ];
  const graph = {};
  const warmSet = new Set();

  for (let i = 0; i < pairsCount; i++) {
    const [start, end] = pairs[i].split(" ").map(Number);
    if (!end) {
      continue;
    }
    if (graph[start]) {
      graph[start].push(end);
    } else {
      graph[start] = [end];
    }

    if (graph[end]) {
      graph[end].push(start);
    } else {
      graph[end] = [start];
    }
  }

  const queue = [1];
  const visited = Array(count + 1).fill(false);

  while (queue.length > 0) {
    const node = queue.shift();
    if (visited[node]) {
      continue;
    }
    visited[node] = true;
    const dots = graph[node] || [];
    dots.forEach((dot) => {
      if (!visited[dot]) queue.push(dot);
    });
  }
  console.log(visited.filter((visit) => visit).length - 1);
};
solution(input);
