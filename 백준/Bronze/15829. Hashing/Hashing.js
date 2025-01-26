const fs = require("fs");

const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
    const lines = input.split('\n').map(el=>el.trim())
    const L = +lines[0]
    const string = lines[1]
    const M = 1234567891n
    const r = 31n;
    const stringNumbers = string.split('').map(el=> BigInt(el.codePointAt(0) - 96) % M)

    const sigma = stringNumbers.map((el,index) => BigInt(el % M) *  pow(r, BigInt(index), M)).reduce((a,b)=> BigInt(a)%M+BigInt(b)%M)
    const result = sigma % M
    return result
}

const pow = (el, index, M) => {
    let result = 1n;
    el = el % M;

    while(index > 0n) {
        if(BigInt(index) % 2n === 1n) {
            result = BigInt(result) * BigInt(el) % BigInt(M);
        }
        el = (el * el) % M;
        index =  (BigInt(index)/2n)
    }
    return result;
}

const result = Number(solution(input));
console.log(result )

