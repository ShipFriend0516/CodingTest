const fs = require("fs");
const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
  const lines = input.split("\n");
  const [N, M] = lines[0].split(" ").map(Number);
  const allSpace = N * M;
  let maxSpace = 0;

  let map = lines.slice(1).map((line) => line.split(" ").map(Number));
  for (let i = 0; i < allSpace - 2; i++) {
    for (let j = i + 1; j < allSpace - 1; j++) {
      for (let k = j + 1; k < allSpace; k++) {
        map = lines.slice(1).map((line) => line.split(" ").map(Number));
        const firstWall = [Math.floor(i / M), i % M];
        if (map[firstWall[0]][firstWall[1]] !== 0) {
          continue;
        }
        const secondWall = [Math.floor(j / M), j % M];
        if (map[secondWall[0]][secondWall[1]] !== 0) {
          continue;
        }
        const thirdWall = [Math.floor(k / M), k % M];
        if (map[thirdWall[0]][thirdWall[1]] !== 0) {
          continue;
        }

        const walls = [firstWall, secondWall, thirdWall];
        const walledMap = dfs(N, M, map, walls);
        maxSpace = Math.max(countSpace(walledMap), maxSpace);
      }
    }
  }

  return maxSpace;
};

const dfs = (N, M, map, walls) => {
  // 바이러스 확산

  const operations = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const queue = [];

  walls.forEach((wall) => {
    const [y, x] = wall;
    map[y][x] = 1;
  });

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 2) {
        // 바이러스 발견
        queue.push([i, j]);
        while (queue.length > 0) {
          const [y, x] = queue.shift();

          for (const [dy, dx] of operations) {
            const nextY = dy + y;
            const nextX = dx + x;
            if (
              nextY >= 0 &&
              nextY < N &&
              nextX >= 0 &&
              nextX < M &&
              map[nextY][nextX] === 0
            ) {
              map[nextY][nextX] = 2;
              queue.push([nextY, nextX]);
            }
          }
        }
      }
    }
  }

  return map;
};

const countSpace = (map) => {
  return map.reduce(
    (acc, cur) => acc + cur.filter((col) => col === 0).length,
    0,
  );
};

console.log(solution(input));
