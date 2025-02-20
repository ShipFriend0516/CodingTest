const fs = require("fs");
const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
  const N = +input.split("\n").map((el) => el.trim());

  const dp = [0, 1, 2, 3, 1, 2, 3, 4, 2, 1, 2];

  for (let i = 11; i <= 50000; i++) {
    const array = [];
    for (let j = 1; i - j * j > 0; j++) {
      array.push(dp[i - j * j]);
    }

    dp[i] = Math.min(Number.isInteger(Math.sqrt(i)) ? 0 : 5, ...array) + 1;
  }

  console.log(dp[N]);
};

solution(input);
