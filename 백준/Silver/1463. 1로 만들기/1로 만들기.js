const fs = require("fs");
const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
  const N = +input;

  const dp = [0, 0, 1, 2, 3, 2, 3, 3, 2, 3, 4, 3];

  for (let i = 2; i <= 1000000; i++) {
    const min = Math.min(
      dp[i - 1],
      dp[Number.isInteger(i / 2) ? i / 2 : i - 1],
      dp[Number.isInteger(i / 3) ? i / 3 : i - 1],
    );
    dp[i] = min + 1;
  }

  console.log(dp[N]);
};
solution(input);
