const fs = require("fs");

const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
    const result = {
        tshirtsBundle: 0,
        penBundle: 0,
        pencilCount: 0,
    }
    const lines = input.split("\n");
    const N = Number(lines[0].trim())
    const sizes = lines[1].split(" ").map(el=>Number(el.trim()));
    const [T,P] = lines[2].split(' ').map(Number)

    for(const size of sizes) {
        let count = Math.ceil(size / T);
        result.tshirtsBundle += count;
    }
    result.penBundle = Math.floor(N/P)
    result.pencilCount = N % P;
    console.log(result.tshirtsBundle)
    console.log(result.penBundle, result.pencilCount);
}

solution(input);