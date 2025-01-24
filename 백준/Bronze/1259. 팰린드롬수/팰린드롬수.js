const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../dev/stdin.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.trim());


const solution = (input) => {

    for(const number of input) {
        if(number==='0') return;
        const isEven  = number.length % 2 === 0;
        if(isEven) {
            const front = number.slice(0, number.length / 2);
            const back = number.slice(number.length / 2, number.length).split('').reverse().join('')
            if(front === back) {
                console.log('yes');
            } else {
                console.log('no');
            }

        } else {
            const front = number.slice(0,number.length/2);
            const back =  number.slice(number.length / 2 + 1, number.length).split('').reverse().join('')

            if(front === back) {
                console.log('yes');
            } else {
                console.log('no');
            }
        }
    }
}

solution(input);

