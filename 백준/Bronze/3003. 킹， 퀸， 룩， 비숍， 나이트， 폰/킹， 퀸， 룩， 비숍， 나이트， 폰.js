const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let height = 0;
let width = 0;
let inputCount = 0;

readline.on('line', function(line) {
	input = line.split(' ').map(Number)
	readline.close();
}).on('close', function(){ 
	console.log(solution(input))
    process.exit();
});

const solution = (input) => {
	let correct = [1,1,2,2,2,8];
	correct = correct.map((chess,index)=> {
		return chess- input[index]
	})
	return correct.join(' ');
}
