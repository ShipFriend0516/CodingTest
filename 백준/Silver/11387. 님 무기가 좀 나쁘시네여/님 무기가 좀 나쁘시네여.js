const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'dev/stdin.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const calculatePower = (
  attack,
  strength,
  criticalRate,
  criticalDamageRate,
  attackSpeed
) => {
  return (
    attack *
    (1 + strength / 100) *
    (1 -
      Math.min(1, criticalRate / 100) +
      (Math.min(1, criticalRate / 100) * criticalDamageRate) / 100) *
    (1 + attackSpeed / 100)
  );
};

const lines = input.map((line) => line.split(' ').map(Number));
const [cri, pabu, criItem, pabuItem] = lines;
const criNew = cri.map((stat, idx) => stat - criItem[idx] + pabuItem[idx]);
const pabuNew = pabu.map((stat, idx) => stat - pabuItem[idx] + criItem[idx]);
const criStat = calculatePower(...cri);
const pabuStat = calculatePower(...pabu);
const criNewStat = calculatePower(...criNew);
const pabuNewStat = calculatePower(...pabuNew);

if (criNewStat > criStat) {
  console.log('+');
} else if (criNewStat < criStat) {
  console.log('-');
} else {
  console.log('0');
}

if (pabuNewStat > pabuStat) {
  console.log('+');
} else if (pabuNewStat < pabuStat) {
  console.log('-');
} else {
  console.log('0');
}
