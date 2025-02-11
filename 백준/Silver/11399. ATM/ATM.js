const fs = require("fs");
const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
  const lines = input.split("\n").map((el) => el.trim());
  const times = lines[1].split(" ").map(Number);
  times.sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i < times.length; i++) {
    result += times.slice(0, i + 1).reduce((a, b) => a + b, 0);
  }

  console.log(result);
};

solution(input);