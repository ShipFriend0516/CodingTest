const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/stdin.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (input) => {
  const N = Number(input[0]);
  const people = new Array(N);

  for (let i = 0; i < N; i++) {
    const [g, x] = input[i + 1].split(' ').map(Number);
    // 남자 -1, 여자 +1
    people[i] = [g === 0 ? -1 : 1, x];
  }

  // x좌표 기준 정렬
  people.sort((a, b) => a[1] - b[1]);

  // 누적합
  const sum = new Array(N);
  sum[0] = people[0][0];
  for (let i = 1; i < N; i++) {
    sum[i] = sum[i - 1] + people[i][0];
  }

  // sum 의 범위는 대략 [-N, N]
  const OFFSET = N; // 음수 보정
  const size = 2 * N + 1;

  // 각 누적합에 대해 "가장 처음 등장 인덱스", "가장 마지막 인덱스"만 기록
  const first = new Int32Array(size).fill(-1);
  const last = new Int32Array(size).fill(-1);

  // sum[i] == 0 인 구간은 0~i 까지 가능하므로, sum=0 도 처리해야 함
  // sum[i] = 0 인 경우, first[0+OFFSET] = min(first, i), last[...] = max(last, i)
  for (let i = 0; i < N; i++) {
    const idx = sum[i] + OFFSET;
    if (first[idx] === -1) first[idx] = i;
    last[idx] = i;
  }

  let answer = 0;

  // sum[i] == 0 인 경우: 0~i 구간이 남녀 수 같음
  // -> x좌표는 people[0].x ~ people[i].x
  const zeroIdx = 0 + OFFSET;
  if (last[zeroIdx] !== -1) {
    answer = Math.max(answer, people[last[zeroIdx]][1] - people[0][1]);
  }

  // sum 값이 같은 i<j 에 대해, (i+1)~j 구간이 남녀 수 같음
  // first[idx]+1 ~ last[idx] 의 x좌표 차이를 본다.
  for (let k = 0; k < size; k++) {
    if (first[k] !== -1 && last[k] !== -1 && first[k] < last[k]) {
      const l = first[k] + 1;
      const r = last[k];
      const dist = people[r][1] - people[l][1];
      if (dist > answer) answer = dist;
    }
  }

  return answer;
};

console.log(solution(input));
