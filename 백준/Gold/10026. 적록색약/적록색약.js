const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : '../dev/stdin.txt';
const input = fs.readFileSync(filePath).toString().trim();

const solution = (input) => {
  const lines = input.split('\n').map((el) => el.trim());
  const N = +lines[0];

  const operations = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let count = N * N;
  let rgCount = N * N;
  let regions = 0;
  let rgRegions = 0;
  const queue = [];

  const visited = Array.from(Array(N), () => new Array(N).fill(0));
  const rgVisited = Array.from(Array(N), () => new Array(N).fill(0));
  const colorTable = lines.slice(1).map((row) => row.trim().split(''));
  const rgColorTable = lines.slice(1).map((row) =>
    row
      .trim()
      .split('')
      .map((el) => (el === 'G' ? 'R' : el))
  );

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visited[i][j] === 0) {
        // 미 방문
        queue.push([i, j]);
        visited[i][j] = 1;
        while (queue.length > 0) {
          const color = queue.shift();
          const [x, y] = color;
          const currentColor = colorTable[x][y];

          for (const operation of operations) {
            const [dx, dy] = operation;
            const nextX = x + dx;
            const nextY = y + dy;
            if (
              nextX >= 0 &&
              nextX < N &&
              nextY >= 0 &&
              nextY < N &&
              visited[nextX][nextY] === 0
            ) {
              if (currentColor === colorTable[nextX][nextY]) {
                visited[nextX][nextY] = 1;
                const nextColor = colorTable[nextX][nextY];
                queue.push([nextX, nextY, nextColor]);
                count--;
              }
            }
          }
        }
        regions++;
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (rgVisited[i][j] === 0) {
        // 미 방문
        queue.push([i, j]);
        rgVisited[i][j] = 1;
        while (queue.length > 0) {
          const color = queue.shift();
          const [x, y] = color;
          const currentColor = rgColorTable[x][y];

          for (const operation of operations) {
            const [dx, dy] = operation;
            const nextX = x + dx;
            const nextY = y + dy;
            if (
              nextX >= 0 &&
              nextX < N &&
              nextY >= 0 &&
              nextY < N &&
              rgVisited[nextX][nextY] === 0 &&
              rgCount > 0
            ) {
              if (currentColor === rgColorTable[nextX][nextY]) {
                rgVisited[nextX][nextY] = 1;
                const nextColor = rgColorTable[nextX][nextY];
                queue.push([nextX, nextY, nextColor]);
                rgCount--;
              }
            }
          }
        }
        rgRegions++;
      }
    }
  }

  return `${regions} ${rgRegions}`;
};

const getNextPos = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 0) {
        return [i, j];
      }
    }
  }

  return [-1, -1];
};

console.log(solution(input));
