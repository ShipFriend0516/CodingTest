const fs = require("fs");
const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
  const lines = input.split("\n").map((el) => el.trim());

  const [N, M] = lines[0].split(" ").map(Number);
  const arr = lines.slice(1).map((row) => row.split("").map(Number));
  const counts = [];

  // i는 세로  j는 가로
  for (let i = N; i > 1; i--) {
    // 사이즈 반복
    for (let k = 0; k <= N - i; k++) {
      for (let l = 0; l <= M - i; l++) {
        const lt = arr[k][l];
        const rt = arr[k][l +i  - 1];
        const lb = arr[k + i - 1][l];
        const rb = arr[k + i - 1][l + i - 1];

        if (lt === rt && rt === lb && lb === rb) {

          counts.push(i * i);
        }
      }
    }
  }

  const max = Math.max(...counts);
  return Number.isSafeInteger(max) ? max : 1;
};

console.log(solution(input));
