function solution(n) {
    if(n%2) return '수박'.repeat(n/2 + 1).slice(0,-1)
    else return '수박'.repeat(n/2)
}