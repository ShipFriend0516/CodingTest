const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "dev/stdin.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

let [A, B, N] = input.map(Number);

for (let i = 0; i < N; i++) {
  let result = A % B;
  if (result === 0) {
    console.log(0);
    break;
  }
  A = result * 10;
  if (i === N - 1) {
    const result = Math.floor(A / B);
    console.log(result);
  }
}
