const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/stdin.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

console.log(Number(input[0]) * Number(input[2]));
