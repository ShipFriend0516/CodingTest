const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let height = 0;
let width = 0;
let inputCount = 0;

readline.on('line', function(line) {
	input = line.split(' ')
	readline.close();
}).on('close', function(){ 
	console.log(solution(input))
    process.exit();
});

const solution = (input) => {
	let [a,b,c,d,e] = input.map(Number);
    return (a**2 + b**2 + c**2 + d**2 + e**2) % 10;
}
