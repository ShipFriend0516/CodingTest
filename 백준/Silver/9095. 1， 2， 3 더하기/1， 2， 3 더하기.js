const fs = require("fs");
const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
  const lines = input
    .split("\n")
    .map((el) => Number(el.trim()))
    .slice(1);

  const dp = [0, 1, 2, 4, 7];

  for (let i = 5; i < 11; i++) {
    dp[i] = dp[i - 1] * 2 - dp[i - 4];
  }

  lines.forEach((line) => console.log(dp[line]));
};
solution(input);
