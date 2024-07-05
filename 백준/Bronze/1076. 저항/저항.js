const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let inputCount = 0;
readline.on('line', function(line) {
	input.push(line)
	inputCount++;
	if(inputCount === 3) {
		readline.close();
	}

	
}).on('close', function(){ 
	console.log(solution(input))
    process.exit();
});

const solution = (colors) => {
	const [firstValue, secondValue, thirdValue] = colors;
	
	const valueMap = {
		'black': 0,
		'brown': 1,
		'red': 2,
		'orange': 3,
		'yellow': 4,
		'green': 5,
		'blue': 6,
		'violet': 7,
		'grey': 8,
		'white': 9,
	}
	
	const multiMap = {
		'black': 1,
		'brown': 10,
		'red': 100,
		'orange': 1000,
		'yellow': 10_000,
		'green': 100_000,
		'blue': 1_000_000,
		'violet': 10_000_000,
		'grey': 100_000_000,
		'white': 1_000_000_000,
	}
	
	return (valueMap[firstValue]*10+valueMap[secondValue])*multiMap[thirdValue];
}

