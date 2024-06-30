const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = [];
let lineCount = 0;
let count = 0;

const factorial = (n) => {
	if(n===0||n===1) {
		return 1;
	} else {
		return n * factorial(n-1);
	}
}


rl.on('line', line=> {
	if(lineCount === 0) {
		lineCount = parseInt(line);

	} else {
		input.push(line.split(' ').map(v=>parseInt(v)))
		if(count === lineCount) {
			rl.close()
		} else {
			count++;		
		}
	}
})

rl.on('close', ()=> {
	input.forEach(input => {
		const n = input[0];
		const m = input[1];
		let result = 1;
		for(let i=0;i<n;i++) {
			result *= m-i
		}
		console.log( Math.round(result/factorial(n)));
	})
	process.exit();
})	
