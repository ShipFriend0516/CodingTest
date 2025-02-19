const fs = require("fs");
const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
  const lines = input
    .split("\n")
    .map((el) => el.trim())
    .slice(1)
    .map(Number);
  const dp = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9];

  for (let i = 11; i <= 100; i++) {
    dp[i] = dp[i - 1] + dp[i - 5];
  }

  lines.forEach((line) => {
    console.log(dp[line]);
  });
};
solution(input);
