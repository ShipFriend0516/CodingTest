function solution(n) {
    let arr = [0,1]
    for(let i=0;i<n-1;i++) {
        arr.push(((arr[i] % 1234567) + (arr[i+1] % 1234567)) % 1234567)
    }
    return arr.pop()
}