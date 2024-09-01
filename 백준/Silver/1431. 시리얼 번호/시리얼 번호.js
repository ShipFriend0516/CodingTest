const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const solution = (input) => {
  const guitarList = input.slice(1);

  guitarList.sort((a, b) => {
    if (a.length < b.length) {
      return -1;
    } else if (a.length > b.length) {
      return 1;
    } else {
      const aSum = [...a].map(Number).reduce((acc, cur) => {
        if (Number.isInteger(cur)) {
          return acc + cur;
        } else {
          return acc;
        }
      }, 0);

      const bSum = [...b].map(Number).reduce((acc, cur) => {
        if (Number.isInteger(cur)) {
          return acc + cur;
        } else {
          return acc;
        }
      }, 0);

      if (aSum < bSum) {
        return -1;
      } else if (aSum > bSum) {
        return 1;
      } else {
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        } else {
          return 0;
        }
      }
    }
  });

  return guitarList.join("\n");
};
console.log(solution(input));
