const fs = require("fs");

const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {

    const [A,B] = input.split(' ').map(el=>Number(el.trim())).sort((a,b)=> b-a)
 
    const result = {
        min: 0,
        max: 0,
    }
    for(let i=B;i>0;i--) {
        if(A % i === 0 && B % i === 0) {
            result.max = i;
            break;
        }
    }
    result.min = A/result.max * B/result.max * result.max

    console.log(result.max)
    console.log(result.min)
}



 solution(input)