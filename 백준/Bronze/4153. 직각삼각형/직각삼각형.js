const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().trim();

const solution = (input) => {
  const lines = input.split("\n");
  for (const line of lines) {
    const arr = line.split(" ").map(Number);
    arr.sort((a, b) => a - b);

    const [A, B, C] = arr;
    if (A === 0) {
      return;
    }
    if (Math.pow(C, 2) == Math.pow(A, 2) + Math.pow(B, 2)) {
      console.log("right");
    } else {
      console.log("wrong");
    }
  }
};

solution(input);
 