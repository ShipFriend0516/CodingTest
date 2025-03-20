const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : '../dev/stdin.txt';
const input = fs.readFileSync(filePath).toString().trim();

const solution = (input) => {
  const lines = input.split('\n');
  const [kind, caffeine] = lines[0].split(' ').map(Number);

  const coffees = lines[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => b - a);

  const CANT = 2000;
  const dp = Array.from(Array(kind + 1), () => Array(caffeine + 1).fill(0));
  dp[0][0] = 0;
  for (let i = 1; i <= caffeine; i++) {
    dp[0][i] = CANT;
  }
  for (let i = 1; i <= kind; i++) {
    const coffee = coffees[i - 1];
    for (let j = 1; j <= caffeine; j++) {
      if (j >= coffee) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - coffee] + 1);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[kind][caffeine] === CANT ? -1 : dp[kind][caffeine];
};

console.log(solution(input));
