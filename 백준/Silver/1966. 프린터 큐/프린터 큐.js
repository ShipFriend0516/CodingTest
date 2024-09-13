const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

// 문서의 개수 | 궁금한 문서의 queue 위치

const solution = (input) => {
  const times = Number(input[0]);

  const cases = input.slice(1).map((el) => el.split(" ").map((el) => Number(el)));
  const answer = [];

  for (let i = 0; i < times * 2; i += 2) {
    const [docCount, order] = cases[i];
    const docs = cases[i + 1];

    let count = 0;
    let target = order;
    let max = Math.max(...docs);
    let queue = docs.map((el, idx) => [el, idx]);

    while (queue.length) {
      const [priority, idx] = queue.shift();

      if (priority === max) {
        count++;
        if (idx === target) {
          answer.push(count);
          break;
        }
        max = Math.max(...queue.map((el) => el[0]));
      } else {
        queue.push([priority, idx]);
      }
    }
  }

  return answer.join("\n");
};

console.log(solution(input));
