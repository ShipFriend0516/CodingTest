const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let N = 0;
let count = 0;
let lineLength = 0;
rl.on("line", (line) => {
  if (N === 0) {
    N = +line;
  } else if (count !== N) {
    input.push(line);
    count++;
    if (count === N) {
      lineLength = input[0].length;
      const set = new Set();
      for (let i = 0; i < lineLength; i++) {
        set.clear();
        for (let j = 0; j < N; j++) {
          const id = input[j];
          set.add(id.slice(-(i + 1)));
        }
        if (set.size === N) {
          console.log(i + 1);
          return i + 1;
        }
      }
    }
  }
});
