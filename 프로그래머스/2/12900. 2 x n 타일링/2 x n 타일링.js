function solution(n) {
    let count = 1;

    
    const dp = [1,2]
    
    const fivo = (n) => {
        for(let i=2;i<n;i++) {
            dp[i] = (dp[i-2] + dp[i-1]) % 1_000_000_007
        }
    }
    
    fivo(n);
    
    return dp[dp.length-1] % 1_000_000_007
}