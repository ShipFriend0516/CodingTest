const fs = require("fs");
const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
  const lines = input.split("\n").map((el) => el.trim());
  const [N, M] = lines[0].split(" ").map(Number);
  if (N === M) {
    return -1;
  }

  return binarySearch(1, N + M, N, M);
};

const binarySearch = (min, max, total, win) => {
  let left = min;
  let right = max;
  let minWinCount = -1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (check(middle, total, win)) {
      // 승률 변함
      right = middle - 1;
      minWinCount = middle;
    } else {
      // 승률 안변함 더 큰 수 도전
      left = middle + 1;
    }
  }
  return minWinCount;
};

const check = (winCount, total, win) => {
  const currentRate = Math.floor(((win + winCount) * 100) / (total + winCount));
  const originalRate = Math.floor((win * 100) / total);
  return originalRate < currentRate;
};

console.log(solution(input));
