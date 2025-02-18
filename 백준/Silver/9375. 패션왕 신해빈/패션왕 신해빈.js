const fs = require("fs");
const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
  const lines = input.split("\n").map((el) => el.trim());
  const caseCount = +lines[0];

  let clothesCountIndex = 1;
  for (let i = 0; i < caseCount; i++) {
    const clothesCount = +lines[clothesCountIndex];

    const map = {};
    for (let j = 0; j < clothesCount; j++) {
      const [name, kind] = lines[clothesCountIndex + j + 1].split(" ");
      if (map[kind]) {
        map[kind].push(name);
      } else {
        map[kind] = [name];
      }
    }

    let result = 1;
    for (const key of Object.keys(map)) {
      result *= map[key].length + 1;
    }
    console.log(result - 1);
    clothesCountIndex += clothesCount + 1;
  }
};
solution(input);
