const fs = require("fs");
const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
    const map = {}
    const lines = input.split('\n').map(el=>el.trim())
    const [N,M] = lines[0].split(' ').map(Number).sort((a,b)=>b-a)
    const result = [];

    for(let i=0;i<N;i++) {
        map[lines[i+1]] = 0;
    }
    for(let i=0;i<M;i++) {
        if(map[lines[N+1+i]] === 0) {
            result.push(lines[N+1+i])
        }
    }

    result.sort()
    return result;
}

const result = solution(input);
console.log(result.length);
for(const line of result) {
    console.log(line)
}

