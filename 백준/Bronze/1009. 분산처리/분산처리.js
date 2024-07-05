const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let testCases = 0;
let currentCase = 0;
let input = [];

readline.on('line', function(line) {
    if (testCases === 0) {
        testCases = parseInt(line);
    } else {
        input.push(line.split(' ').map(Number));
        currentCase++;
        if (currentCase === testCases) {
            readline.close();
        }
    }
}).on('close', function(){ 
    input.forEach(([a, b]) => {
        let result;
        a = a % 10;
        
        if (a === 0) result = 10;
        else if (a === 1 || a === 5 || a === 6) result = a;
        else if (a === 4 || a === 9) {
            result = b % 2 === 0 ? (a * a) % 10 : a;
        } else {
            b = b % 4;
            if (b === 0) b = 4;
            result = Math.pow(a, b) % 10;
        }
        
        console.log(result === 0 ? 10 : result);
    });
    
    process.exit();
});