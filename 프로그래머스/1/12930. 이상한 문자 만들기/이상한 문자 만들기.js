function solution(s) {
    return s.split(' ').map((s)=> [...s].map((word,i)=>i%2 ? word.toLowerCase() : word.toUpperCase()).join('')).join(' ')
}