const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../dev/stdin.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.trim());


const solution = (input) => {
    const N = +input;
    let minNumber= 1;
    let maxNumber =1;
    let currentCycle = 1;

    if(minNumber === N) {
        return currentCycle;
    }

    while(minNumber <= N) {
        minNumber = maxNumber + 1;
        maxNumber += 6 * currentCycle;
        currentCycle++;

        if(minNumber <=N && maxNumber >= N) {
            return currentCycle
        }
    }
}

console.log(solution(input));

