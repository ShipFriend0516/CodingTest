const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : '../dev/stdin.txt';
const input = fs.readFileSync(filePath).toString().trim();

const solution = (input) => {
  const lines = input.split('\n').map((el) => el.trim());
  const [M, N, H] = lines[0].split(' ').map(Number);

  const tomatoBox = [];
  const opers = [
    [1, 0, 0, 0],
    [-1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, -1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, -1, 0],
  ];

  for (let h = 0; h < H; h++) {
    const floor = lines.slice(1 + h * N, 1 + h * N + N);
    tomatoBox.push(floor.map((row) => row.split(' ').map(Number)));
  }

  let front = 0;
  let queue = [];
  let tomatoCount = 0;
  let maxDay = 0;

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < M; k++) {
        if (tomatoBox[i][j][k] === 1) {
          queue.push([i, j, k, 1]);
        } else if (tomatoBox[i][j][k] === 0) {
          tomatoCount++;
        }
      }
    }
  }

  while (front < queue.length) {
    const pos = queue[front++];

    const nextPoses = [];
    nextPoses.push(...opers.map((operation) => sumOfArray(operation, pos)));

    for (const nextPos of nextPoses) {
      const [i, j, k, day] = nextPos;
      if (i >= H || j >= N || k >= M || i < 0 || j < 0 || k < 0) continue;
      if (tomatoBox[i][j][k] === 0) {
        tomatoBox[i][j][k] = 1;
        tomatoCount--;
        queue.push([i, j, k, day + 1]);
        maxDay = Math.max(maxDay, day);
      }
    }

    if (tomatoCount <= 0) {
      break;
    }
  }

  if (tomatoCount > 0) return -1;
  return maxDay;
};

const sumOfArray = (arr1, arr2) => {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] + arr2[i]);
  }
  return result;
};

console.log(solution(input));
