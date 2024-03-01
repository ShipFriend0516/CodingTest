function solution(x) {
    return x % x.toString().split('').map(x=>x/1).reduce((a,b)=> a+b) === 0 ? true : false;
}