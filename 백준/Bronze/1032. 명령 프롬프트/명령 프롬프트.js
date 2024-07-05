const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let testCases = 0;
let input = [];
let casesCount = 0;


readline.on('line', function(line) {
	if(testCases === 0) {
		testCases = +line;
	} else {
		input.push(line)
		casesCount++;
		if(testCases === casesCount) {
			readline.close()
		}
	}
}).on('close', function(){ 
	console.log(solution(input))
    process.exit();
});

const solution = (files) => {
	let index = 1;
	let result = []
	const length = files[0].length;
	
	if(files.length === 1) {
		return files[0];
	}
	while(index <= length) {
		let prefix = files[0].slice(index-1,index);
		let isCorrect = true;
		
		for(const file of files) {
			if(file[index-1] === prefix) {
				continue;
			} else {
				isCorrect = false;
				break;
			}
		}

		if(isCorrect) {
			result.push(prefix)
			index++;
		}
		else {
			result.push('?');
			index++;
		}
	}
	return result.join('')
}

