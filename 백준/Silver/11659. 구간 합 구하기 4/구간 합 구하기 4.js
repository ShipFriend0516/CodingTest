const fs = require("fs");
const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
  const lines = input.split("\n").map((el) => el.trim());

  const [N, M] = lines[0].split(" ").map(Number);
  const numbers = [0, ...lines[1].split(" ").map(Number)];
  const sums = Array(N + 1).fill(0);

  for (let i = 1; i < numbers.length; i++) {
    sums[i] = sums[i - 1] + numbers[i];
  }

  for (let m = 2; m < M + 2; m++) {
    const [i, j] = lines[m].split(" ").map(Number);
    let result = 0;

    result = sums[j] - sums[i - 1];

    console.log(result);
  }
};

solution(input);
