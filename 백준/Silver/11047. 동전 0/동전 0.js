const fs = require("fs");
const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
  const lines = input.split("\n").map((el) => el.trim());

  const [N, K] = lines[0].split(" ").map(Number);
  const coins = lines.slice(1).reverse().map(Number);

  let leftMoney = K;
  let minCoins = 0;

  while (leftMoney > 0) {
    for (const coin of coins) {
      if (leftMoney < coin) {
        continue;
      } else {
        const usedCoin = Math.floor(leftMoney / coin);
        leftMoney = leftMoney % coin;
        minCoins += usedCoin;
        break;
      }
    }
  }

  console.log(minCoins);
};

solution(input);
