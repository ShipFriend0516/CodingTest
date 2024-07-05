const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let inputCount = 0;
readline.on('line', function(line) {
	input.push(line)
	inputCount++;
	if(inputCount === 8) {
		readline.close();
	}

}).on('close', function(){ 
	console.log(solution(input))
    process.exit();
});

const solution = (chess) => {
	// 제일 왼쪽 위가 흰색
	let count = 0;
	
	for(let i=0;i<8;i++) {
		for(let j=1;j<=4;j++) {
			if(i%2 === 0) {
				if(chess[i][j*2-2] === 'F') {
					count++;
				}
			} else if(i%2 === 1) {
				if(chess[i][j*2-1] === 'F') {
					count++;
				}
			}
			
		}
	}
	
	return count;
}

