const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const solution = (input) => {
  const operators = ["+", "-", "*", "/", "%"];
  const [a, b] = input[0].split(" ").map(Number);
  return operators.map((operator) => Math.floor(eval(`${a}${operator}${b}`))).join("\n");
};

console.log(solution(input));
