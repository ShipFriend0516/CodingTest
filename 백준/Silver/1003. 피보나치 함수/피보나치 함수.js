const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const solution = (input) => {
  const n = +input[0];

  for (let i = 0; i < n; i++) {
    console.log(zeroAndOne(+input[i + 1]));
  }
};

const zeroAndOne = (num) => {
  let count = [1, 1];
  if (num === 0) {
    return `1 0`;
  } else if (num === 1) {
    return `0 1`;
  }

  for (let i = 2; i < num; i++) {
    let sum = count[0] + count[1];
    count[0] = count[1];
    count[1] = sum;
  }
  return count.join(" ");
};

solution(input);
