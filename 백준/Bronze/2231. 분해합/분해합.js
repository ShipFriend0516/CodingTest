const fs = require("fs");

const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
    const length = input.toString().length;
    const N = +input;
    const minNumber =  Math.max(1, N - (9 * length));
    for(let i=minNumber; i<=N;i++) {
        const sum = sumOfNumber(i);
        if(N === i+sum) {
            console.log(i)
            return;
        }
    }
    console.log('0')
}

const sumOfNumber = (number) => {
   return number.toString().split('').reduce((a,b)=> Number(a)+Number(b),0)
}


solution(input)