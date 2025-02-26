const fs = require("fs");
const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
  const lines = input.split("\n").map((el) => el.trim());
  const N = +lines[0];
  const paper = Array.from(Array(N), () => Array(N).fill(0));
  const answer = [0, 0];
  for (let i = 0; i < N; i++) {
    paper[i] = lines[i + 1].split(" ").map(Number);
  }
  const entire = paper.reduce(
    (prev, current) => prev + current.reduce((a, b) => a + b, 0),
    0,
  );
  if (entire === N * N) {
    console.log([0, 1].join("\n"));

    return;
  } else if (entire === 0) {
    console.log([1, 0].join("\n"));

    return;
  }

  const getPos = (n, startX, startY) => {
    return [
      [0 + startX, 0 + startY],
      [0 + startX, n + startY],
      [n + startX, 0 + startY],
      [n + startX, n + startY],
    ];
  };

  const getSumOfPartision = (size, startX, startY, paperCount) => {
    const poses = getPos(size, startX, startY);
    for (let i = 0; i < 4; i++) {
      // 4번 반복
      const sum = sumOfArray(paper, size, poses[i][0], poses[i][1]);
      if (sum === 0) {
        paperCount[0]++;
      } else if (sum === Math.pow(size, 2)) {
        paperCount[1]++;
      } else {
        if (size / 2 > 0)
          getSumOfPartision(size / 2, poses[i][0], poses[i][1], paperCount);
      }
    }
  };

  getSumOfPartision(N / 2, 0, 0, answer);
  console.log(answer.join("\n"));
};

const sumOfArray = (paper, size, x, y) => {
  let result = 0;
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      result += paper[j][i];
    }
  }

  return result;
};
solution(input);
