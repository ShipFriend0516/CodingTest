function solution(n) {

    let arr = [0,1];
    
    for(let i=2;i<=n+1;i++) {
        let next = ((arr[i-2] % 1234567) + (arr[i-1] % 1234567)) % 1234567
        arr.push(next)
    }
    
    return arr.pop();
}