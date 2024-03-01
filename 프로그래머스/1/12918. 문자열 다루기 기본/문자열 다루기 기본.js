function solution(s) {
   

    return  [...s].filter(s=> !Number.isInteger(parseInt(s))).length === 0 && (s.length === 4 || s.length === 6)? true: false;
}