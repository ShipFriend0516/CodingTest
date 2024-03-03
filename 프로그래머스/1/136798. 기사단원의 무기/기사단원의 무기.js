function solution(number, limit, power) {
    let answer = []
    let result = 0;
    for(let i=1;i<=number;i++) {
        let count = 0;
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                count += (j === Math.sqrt(i)) ? 1 : 2;
            }
        }
        result += count > limit ? power : count;
    }
    return result;
}