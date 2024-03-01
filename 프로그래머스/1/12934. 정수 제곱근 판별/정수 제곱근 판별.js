function solution(n) {
    return Math.sqrt(n) % 1 === 0 ? (Math.sqrt(n)+1)*(Math.sqrt(n)+1) : -1
}