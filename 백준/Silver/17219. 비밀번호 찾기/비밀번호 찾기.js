const fs = require("fs");
const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
  const lines = input.split("\n").map((el) => el.trim());

  const [N, M] = lines[0].split(" ").map(Number);

  const map = new Map();

  const sites = lines.slice(1, N + 1);
  for (const info of sites) {
    const [sitename, password] = info.split(" ");

    map.set(sitename, password);
  }

  for (const info of lines.slice(N + 1)) {
    console.log(map.get(info));
  }
};
solution(input);
