const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : '../dev/stdin.txt';
const input = fs.readFileSync(filePath).toString().trim();

const solution = (input) => {
  const lines = input.split('\n').map((el) => el.trim());
  const N = +lines[0];
  const meetings = lines.slice(1).map((el) => el.split(' ').map(Number));

  meetings.sort((a, b) => {
    const [aStart, aEnd] = a;
    const [bStart, bEnd] = b;

    if (aEnd - bEnd > 0) {
      return 1;
    } else if (aEnd - bEnd < 0) {
      return -1;
    } else {
      return aStart - bStart;
    }
  });

  const result = [meetings[0]];
  for (let i = 1; i < meetings.length; i++) {
    const meet = meetings[i];
    if (meet[0] === meet[1]) {
      result.push(meet);
      continue;
    }
    if (result.at(-1)[1] <= meet[0]) {
      result.push(meet);
    }
  }

  return result.length;
};

console.log(solution(input));
