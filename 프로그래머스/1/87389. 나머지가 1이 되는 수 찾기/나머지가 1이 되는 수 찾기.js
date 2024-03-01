function solution(n) {
    for(let i=0; i<n-1; i++) {
        if(n%(i+1) === 1) {
            return i+1
        }
    }
}