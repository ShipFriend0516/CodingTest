const fs = require("fs");
const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
  const lines = input.split("\n").map((el) => el.trim());
  const [N, M] = lines[0].split(" ").map(Number);
  const trees = lines[1].split(" ").map(Number);

  const highestTree = Math.max(...trees);

  let answer = 0;
  let left = 0;
  let right = highestTree;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    const result = cutTheTree(trees, mid);
    if (result >= M) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log(answer);
};

const cutTheTree = (trees, height) => {
  let result = 0;

  trees.forEach((tree) => {
    if (tree - height > 0) {
      result += tree - height;
    }
  });

  return result;
};

solution(input);
