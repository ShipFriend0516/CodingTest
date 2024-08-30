const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const solution = (input) => {
  return input[0]
    .split(" ")
    .map(Number)
    .reduce((a, b) => a * b);
};

console.log(solution(input));
