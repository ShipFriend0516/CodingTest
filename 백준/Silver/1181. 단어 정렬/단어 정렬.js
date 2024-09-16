const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const solution = (input) => {
  const words = input.slice(1);
  return [
    ...new Set(
      words.sort((a, b) => {
        if (a.length < b.length) return -1;
        else if (a.length > b.length) return 1;
        else {
          if (a < b) return -1;
          else if (a > b) return 1;
          else return 0;
        }
      })
    ),
  ].join("\n");
};

console.log(solution(input));
