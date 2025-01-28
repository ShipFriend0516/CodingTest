const fs = require("fs");

const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
    const points = input.split('\n')[1].split(' ').map(el=>Number(el.trim())) 
    const max = Math.max(...points)
    const result = points.reduce((pre,cur)=> pre + calculate(cur,max), 0)
    return result/points.length
}

const calculate = (number, M) => number/M * 100




console.log(solution(input));