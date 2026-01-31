const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, a, b] = input[0].split(" ").map(Number);

// 가능한 케이스
// 1칸
// a+1칸
// b+1칸

// 위치, 턴 횟수
const q = [[0, 0]];
const visited = Array(N + 1).fill(false);

while (q.length > 0) {
  const [pos, time] = q.shift();
  if (pos > N) continue;
  if (visited[pos]) continue;
  visited[pos] = true;

  if (!visited[pos + 1]) q.push([pos + 1, time + 1]);
  if (!visited[pos + a + 1]) q.push([pos + a + 1, time + 1]);
  if (!visited[pos + b + 1]) q.push([pos + b + 1, time + 1]);
  if (pos === N) {
    console.log(time);
  }
}
