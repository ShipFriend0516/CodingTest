const fs = require("fs");

const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
    const lines = input.split('\n').map(el=>Number(el.trim()))
    const caseCount = +lines[0];
    const zeroFloor = Array(14).fill(0).map((el,index) => el+index+1)


    const dp = Array.from(Array(15), ()=> new Array(14))
    dp[0] = zeroFloor;

    for(let i=1;i<15;i++){
        dp[i][0] = 1;
        for(let j=1;j<14;j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }

    for(let i=0;i<caseCount;i++){
        const [k, n] = [lines[i*2+1], lines[i*2+2]]
        console.log(dp[k][n-1]) 
    }
}




solution(input)