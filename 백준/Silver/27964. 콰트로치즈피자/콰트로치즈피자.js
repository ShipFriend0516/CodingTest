const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const solution = (input) => {
  const cheeses = new Set();
  for (const cheese of input.at(1).split(" ")) {
    if (cheese.endsWith("Cheese")) cheeses.add(cheese);
  }
  return cheeses.size >= 4 ? "yummy" : "sad";
};

console.log(solution(input));
