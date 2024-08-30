const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let 학생들 = [];
let 주머니 = [];
let 학생수 = 0;
let 최대라인길이 = 0;
let 라인카운트 = 0;
const 시나리오별결과 = [];

rl.on("line", (라인) => {
  if (라인 === "0") {
    console.log(시나리오별결과.map((학생이름, 인덱스) => `${인덱스 + 1} ${학생이름}`).join("\n"));
  }
  if (학생수 === 0) {
    학생수 = +라인;
    최대라인길이 = 학생수 + 학생수 * 2 - 1;
  } else if (최대라인길이 > 라인카운트) {
    if (학생수 > 라인카운트) {
      학생들.push(라인);
      라인카운트++;
    } else {
      주머니.push(라인);
      라인카운트++;
      if (최대라인길이 === 라인카운트) {
        시나리오별결과.push(solution(학생들, 주머니));
        학생수 = 0;
        학생들 = [];
        주머니 = [];
        최대라인길이 = 0;
        라인카운트 = 0;
      }
    }
  }
});

const solution = (학생들, 주머니) => {
  const 학생수 = 학생들.length;
  const 배열 = Array(학생수).fill(2);

  주머니.forEach((귀걸이) => {
    const [학생번호, 귀걸이문자] = 귀걸이.split(" ");
    배열[학생번호 - 1]--;
  });

  const 빡친학생의번호 = 배열.findIndex((못찾은귀걸이) => 못찾은귀걸이 === 1);
  const 빡친학생 = `${학생들[빡친학생의번호]}`;
  return 빡친학생;
};
