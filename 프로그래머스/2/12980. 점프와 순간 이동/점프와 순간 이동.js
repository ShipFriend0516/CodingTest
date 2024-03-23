function solution(n)
{
    let k=1;
    
    while(n!==1) {
        n /= 2;
        if(!Number.isInteger(n)) {
            k++; 
            n = Math.floor(n)
        }
    }
    return k;
}