const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K, A, B] = input[0].split(" ").map(Number);

let arr = Array(N).fill(K);

for (let t = 1; t <= 10000; t++) {
  const needIndex = arr.findIndex((el) => Math.min(...arr) === el);
  for (let j = 0; j < A; j++) {
    if (needIndex + j < N) {
      arr[needIndex + j] += B;
    }
  }

  arr = arr.map((el) => el - 1);

  const isDead = arr.findIndex((el) => el <= 0);
  if (isDead !== -1) {
    console.log(t);
    break;
  }
}
