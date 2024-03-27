function solution(n, t, m, p) {
    const answer = [];
    const numbers = [];
    for(let i=0;i<m * t;i++) {
        numbers.push(...i.toString(n).split(''))
    }
    for(let i=p-1;i<m*t;i+=m) {
        answer.push(numbers[i])
    }
    
    return answer.join('').toUpperCase();
}