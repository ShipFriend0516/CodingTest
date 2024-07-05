const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = '';
readline.on('line', function(line) {
	input = (line)
	readline.close();

}).on('close', function(){ 
	console.log(solution(input))
    process.exit();
});

const solution = (N) => {
	const firstNumber = N < 10 ? `0${N}` : N;;
	let afterNumber = '';
	let count = 0;
	
	while(firstNumber !== afterNumber) {
		if(afterNumber === '') {
			const [a,b] = firstNumber;
			
			afterNumber = `${b}${(parseInt(a)+parseInt(b))%10}`;
		} else {
			const [a,b] = afterNumber;

			afterNumber = `${b}${(parseInt(a)+parseInt(b))%10}`;
		}
		count++;
	}
	return count;
}
