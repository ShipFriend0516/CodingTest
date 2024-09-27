const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const solution = (input) => {
  const answer = [];
  input.forEach((line) => {
    const [startH, startM, startS, endH, endM, endS] = line.split(" ").map(Number);

    let h = endH - startH;
    let m = endM - startM;
    let s = endS - startS;
    if (s < 0) {
      s += 60;
      m--;
    }
    if (m < 0) {
      m += 60;
      h--;
    }
    if (h < 0) {
      h += 24;
    }
    answer.push(`${h} ${m} ${s}`);
  });

  return answer.join("\n");
};

console.log(solution(input));
