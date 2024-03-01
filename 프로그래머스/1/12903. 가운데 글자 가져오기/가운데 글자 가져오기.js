function solution(s) {
    return s.length % 2 ? s[Math.floor(s.length/2)] : s.slice(Math.floor(s.length/2-1), Math.floor(s.length/2+1))
}