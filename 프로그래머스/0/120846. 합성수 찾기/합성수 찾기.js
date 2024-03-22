function solution(n) {
    let count = 0;
    let numbers = [];

    for(let i=2;i<=n;i++) {
        count = 0;
        for(let j=2;j<=Math.sqrt(i);j++) {
            if(i%j === 0) {
                count+=2;
            }
            if(count >= 2) {
                numbers.push(i)
                break;
            }
        }
    }
    return numbers.length;
}