const fs = require("fs");

const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
    const lines = input.split('\n').map(el=>el.trim())
    const [N,M] = lines[0].split(' ').map(Number)

    const arrays = lines[1].split(' ').map(Number).sort((a,b)=> b-a)


    let maxSum = 0;
    for(let i=0;i<N;i++) {
        for(let j=i+1;j<N;j++) {
            for(let k=j+1;k<N;k++) {
                const sumResult = sum(arrays.at(i),arrays.at(j),arrays.at(k))
                if(sumResult <= M && sumResult > maxSum) {
                    maxSum = sumResult
                }
            }
        }
    }

    return maxSum
}

const sum = (a,b,c) => a+b+c;


const result = solution(input);
console.log(result)