const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const people = input[1].split(" ").map(Number);
people.sort((a, b) => a - b);
let result = 0;
for (let i = 0; i < people.length; i++) {
  let sum = 0;
  for (let j = 0; j < i + 1; j++) {
    sum += people[j];
  }
  result += sum;
}
console.log(result);
