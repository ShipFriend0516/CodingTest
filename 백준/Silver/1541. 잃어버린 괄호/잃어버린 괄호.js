const fs = require("fs");
const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
  const line = input;

  const lines = line.split(/[-]/);
  const result = lines.map((line) =>
    line
      .split("+")
      .map(Number)
      .reduce((a, b) => a + b),
  );
  console.log(result.reduce((a, b) => a - b));
};

solution(input);
