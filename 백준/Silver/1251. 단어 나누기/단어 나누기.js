const fs = require("fs");
const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
  const lines = input.split("\n");

  const word = lines[0].trim();
  const result = [];

  if (word.length < 4) return word;

  for (let i = 1; i < word.length; i++) {
    for (let j = i + 1; j < word.length ; j++) {
      const first = word.slice(0, i).split("").reverse().join("");
      const second = word.slice(i, j).split("").reverse().join("");
      const third = word
        .slice(j)
        .split("")
        .reverse()
        .join("");

      result.push(first + second + third);
      
    }
  }
  return result.sort().at(0);
};

console.log(solution(input));
