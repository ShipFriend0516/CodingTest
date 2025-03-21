const fs = require("fs");
const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
  const lines = input.split("\n").map((el) => el.trim());
  const N = +lines[0];
  const result = [];
  const visited = Array(10000).fill(false);
  let queue = [];
  for (let i = 1; i < N + 1; i++) {
    queue = [];
    visited.fill(false);
    const [current, goal] = lines[i].split(" ").map(Number);
    const D_result = D(current);
    const S_result = S(current);
    const L_result = L(current);
    const R_result = R(current);

    queue.push(
      [D_result, "D"],
      [S_result, "S"],
      [L_result, "L"],
      [R_result, "R"],
    );
    while (queue.length > 0) {
      const [num, combination] = queue.shift();

      if (num === goal) {
        result.push(combination);
        break;
      } else if (num !== goal) {
        const DR = D(num);
        const SR = S(num);
        const LR = L(num);
        const RR = R(num);

        if (!visited[DR]) {
          queue.push([DR, combination + "D"]);
          visited[DR] = true;
        }
        if (!visited[SR]) {
          queue.push([SR, combination + "S"]);
          visited[SR] = true;
        }
        if (!visited[LR]) {
          queue.push([LR, combination + "L"]);
          visited[LR] = true;
        }
        if (!visited[RR]) {
          queue.push([RR, combination + "R"]);
          visited[RR] = true;
        }
      }
    }
  }

  return result.join("\n");
};

const D = (num) => {
  return (num * 2) % 10000;
};

const S = (num) => {
  return num === 0 ? 9999 : num - 1;
};

const L = (num) => {
  return (num % 1000) * 10 + Math.floor(num / 1000);
};

const R = (num) => {
  return (num % 10) * 1000 + Math.floor(num / 10);
};

console.log(solution(input));
