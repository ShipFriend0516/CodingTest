function solution(arr1, arr2) {
    let answer = [];
    let rl = arr1.length;
    let cl = arr2[0].length;

    for (let row = 0; row < rl; row++) {
        let multiedRow = [];
        for (let col = 0; col < cl; col++) {
            let value = 0;
            for (let k = 0; k < arr1[row].length; k++) {
                value += arr1[row][k] * arr2[k][col];
            }
            multiedRow.push(value);
        }
        answer.push(multiedRow);
    }
    return answer;
}
