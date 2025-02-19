const fs = require("fs");
const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
  const N = +input.split("\n").map((el) => el.trim());
  const dp = [1, 3, 5, 11];

  for (let i = 4; i <= 1000; i++) {
    dp[i] = (dp[i - 1] % 10007) + ((dp[i - 2] * 2) % 10007);
  }

  console.log(dp[N - 1] % 10007);
};

solution(input);
