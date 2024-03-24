function solution(n,a,b)
{
    let repeat = n.toString(2).replace('1','').length;
    for(let round=1;round<=repeat+1;round++) {
        if(a===b) {
            return round-1;
        }
        a = Math.ceil(a / 2)
        b = Math.ceil(b / 2)
    }
}