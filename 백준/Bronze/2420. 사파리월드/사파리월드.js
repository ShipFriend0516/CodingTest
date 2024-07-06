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
	let [a,b] = input;
	a = parseInt(a)
	b = parseInt(b)
	return Math.abs(a-b)
}
