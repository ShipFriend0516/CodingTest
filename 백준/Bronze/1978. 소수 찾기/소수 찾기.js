const fs = require("fs");

const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {

    const lines = input.split("\n");
    const numbers = lines[1].split(" ").map(Number);
    let count = 0;
    for (const num of numbers) {
        if (isPrime(num)) {
            count++;
        }
    }
    console.log(count);
}

const isPrime = (num ) => {
    if(num === 1) {
        return false;
    }

    for(let i=2;i<=Math.sqrt(num);i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

// 4 9 5 8 1 2 3 6 7

solution(input);