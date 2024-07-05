function solution(numbers) {
    return [...new Set(getPermutantNums(numbers))].filter(v => isPrime(v)).length;
}

const getPermutantNums = (string) => {
    const answer = [];
    const n = string.length;
    let visited = Array(n).fill(0);
    
    const dfs = (curStr) => {
        answer.push(+curStr);
        for (let i = 0; i < n; i++) {
            if (visited[i] === 0) {
                visited[i] = 1;
                dfs(curStr + string[i]);
                visited[i] = 0;
            }
        }
    }
    dfs('');
    return answer;
}

const isPrime = (n) => {
    if (n === 0 || n === 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}