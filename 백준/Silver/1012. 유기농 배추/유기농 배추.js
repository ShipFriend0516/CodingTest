const fs = require("fs");
const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
  const lines = input.split("\n").map((el) => el.trim());

  const testCaseCount = +lines[0];
  const calculations = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  let index = 1;
  for (let i = 0; i < testCaseCount; i++) {
    // 테스트 케이스만큼 반복
    const [N, M, K] = lines[index].split(" ").map(Number);
    const field = Array.from(Array(M).fill(0), () => Array(N).fill(0));
    let vegetables = lines
      .slice(index + 1, index + 1 + K)
      .map((pos) => pos.split(" ").map(Number));
    vegetables.forEach(([x, y]) => {
      field[y][x] = 1;
    });
    let bugs = 0;

    while (vegetables.length > 0) {
      const queue = [vegetables.at(0)];
      const visited = {};
      while (queue.length > 0) {
        const vegetable = queue.shift();
        if (visited[vegetable.toString()] === true) continue;
        visited[vegetable.toString()] = true;

        calculations.forEach(([calX, calY]) => {
          const nextPos = [vegetable[0] + calX, vegetable[1] + calY];
          const [nextX, nextY] = nextPos;
          if (
            validate(nextX, nextY, M, N) &&
            field[nextY][nextX] === 1 &&
            !visited[nextPos.toString()]
          ) {
            queue.push(nextPos);
          }
        });
      }
      const cover = Object.keys(visited)
        .map((key) => key.split(",").map(Number))
        .map((el) => JSON.stringify(el));
      vegetables = vegetables.filter(
        (veg) => !cover.includes(JSON.stringify(veg)),
      );

      bugs++;
    }
    index = index + K + 1;
    console.log(bugs);
  }
};

const validate = (x, y, N, M) => {
  return !(x < 0 || y < 0 || x >= M || y >= N);
};

solution(input);
