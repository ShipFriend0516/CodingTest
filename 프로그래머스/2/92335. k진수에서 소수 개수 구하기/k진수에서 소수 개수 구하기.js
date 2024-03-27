function solution(n, k) {
    let count = 0;
    n.toString(k).split('0').forEach(s=> {
        if(s!=='')
            if(isPrime(s)) count++;
    }) 
    return count;
}

const isPrime = (num) => {
    num = parseInt(num)
    if(num === 1) return false;
    if(!Number.isInteger(Math.sqrt(num))) {
        for(let i=2;i<Math.sqrt(num);i++) { 
            if(num%i === 0) {
                return false;
            }
        }
    } else {
        return false;
    }
    return true;
}