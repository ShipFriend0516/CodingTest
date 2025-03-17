const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : '../dev/stdin.txt';
const input = fs.readFileSync(filePath).toString().trim();

const solution = (input) => {
  const lines = input.split('\n').map((el) => el.trim());
  const testCaseCount = +lines[0];

  for (let i = 0; i < testCaseCount; i++) {
    // Test case 만큼
    let [opers, count, numbers] = lines.slice(i * 3 + 1, i * 3 + 4);
    numbers =
      numbers.length > 2 ? numbers.slice(1, -1).split(',').map(Number) : [];
    count = Number(count);

    let isReversed = false;
    let front = 0;
    let back = 0;

    for (const operation of opers.split('')) {
      if (operation === 'R') {
        isReversed = !isReversed;
      } else if (operation === 'D') {
        if (front + back < count) {
          if (isReversed) back++;
          else front++;
        } else {
          numbers = 'error';
          break;
        }
      }
    }
    if (typeof numbers === 'string') {
      console.log(numbers);
    } else {
      numbers = isReversed
        ? numbers.reverse().slice(back, count - front)
        : numbers.slice(front, count - back);
      console.log(`[${numbers.toString()}]`);
    }
  }
};

solution(input);
