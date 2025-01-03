const fs = require(`fs`);
const filePath = process.platform === `linux` ? `/dev/stdin` : `dev/stdin.txt`;
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const x = Number(input[0]);

// 피보나치 수열 중 몇번째 수 이하인지 구하는 함수
const getFivo = (index) => {
  let i = 1;
  let result = 1;
  while (result < index) {
    i++;
    result += i;
  }
  return [i, result];
};

const [fivo, result] = getFivo(x);
const isEven = fivo % 2 === 0 ? true : false;
const array = [];
for (let i = 1; i <= fivo; i++) {
  const el = `${i}/${fivo - i + 1}`;
  array.push(el);
}

if (isEven) {
  console.log(array.reverse()[result - x]);
} else {
  console.log(array[result - x]);
}
