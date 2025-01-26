const fs = require("fs");

const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
    const lines = input.split('\n').map(el=>el.trim())
    const L = +lines[0]
    const string = lines[1]
    const M = 1234567891
    const r = 31;
    const stringNumbers = string.split('').map(el=> el.codePointAt(0) - 96)
    const sigma = stringNumbers.map((el,index) => el * Math.pow(r, index)).reduce((a,b)=> a+b)
    const result = sigma % M
    return result
}



const result = solution(input);
console.log(result)