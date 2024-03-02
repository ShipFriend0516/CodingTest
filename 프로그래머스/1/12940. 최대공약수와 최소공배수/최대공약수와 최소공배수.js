function solution(n, m) {
    if(n>m) [n,m] = [m,n];
    let stack = []
    let last = []
    
    for(let i=1;i<=m;i++){
        if([n,m].map(e=> e/i).filter(e=> Number.isInteger(e)).length === 2) {
            stack.push(i); 
            last = [n/i, m/i]
        }
    }
    let 최대공약수 = stack.pop()
    let 최소공배수 = 최대공약수 * last[0] * last[1]
    
    return [a,b] = [최대공약수, 최소공배수];
}