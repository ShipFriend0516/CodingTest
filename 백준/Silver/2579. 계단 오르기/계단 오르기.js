const fs = require("fs");
const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
  const lines = input.split("\n").map((el) => Number(el.trim()));
  const [count, stairs] = [lines.at(0), lines.slice(1)];

  if (stairs.length === 1) {
    console.log(stairs.at(0));
    return;
  }

  const dp = [
    [0, 0],
    [0, stairs.at(0)],
    [stairs.at(0) + stairs.at(1), stairs.at(1)],
  ];

  for (let i = 3; i <= count; i++) {
    const currentPoint = stairs[i - 1];

    const stroke = dp[i - 1][1] + currentPoint;
    const jump = Math.max(...dp[i - 2]) + currentPoint;

    dp.push([stroke, jump]);
  }
  console.log(Math.max(...dp.at(-1)));
};
solution(input);
