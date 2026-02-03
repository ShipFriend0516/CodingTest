const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);

const lines = input.slice(1);
const totalMinutes = lines.map((time) => {
  const [H, M] = time.split(":").map(Number);
  const totalMinutes = H * 60 + M;
  return totalMinutes % 720;
});

let minClocks = N; // 최악의 경우

// R을 1부터 720까지 모두 시도
for (let r = 0; r < 720; r++) {
  const clockTimes = new Set();

  for (let i = 0; i < N; i++) {
    // i번째 기록의 시계 초기 시간 계산
    const clockTime = (totalMinutes[i] - ((i * r) % 720) + 720) % 720;

    clockTimes.add(clockTime);
  }

  minClocks = Math.min(minClocks, clockTimes.size);
}
console.log(minClocks);
