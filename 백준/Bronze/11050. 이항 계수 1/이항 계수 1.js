const fs = require("fs");

const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
    const [N,K] = input.split(' ').map(Number)
    const factorials = Array(11).fill(1)

    if (K === 0 || K === N) {
        console.log(1);
        return;
    }
    if (K === 1) {
        console.log(N);
        return;
    }
    for(let i=0;i<11;i++) {
        for(let j=1;j<=i+1;j++) {
            factorials[i] = factorials[i] * j;
        }
    }
    const result = factorials[N-1] / (factorials[N-K-1] * factorials[K-1])
    console.log(result)
}



solution(input)
