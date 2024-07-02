function solution(land) {
    const dp = land.map(row => [...row]);
    
    for (let row = 1; row < land.length; row++) {
        for (let col = 0; col < 4; col++) {
            dp[row][col] += Math.max(
                col > 0 ? dp[row-1][0] : 0,
                col !== 1 ? dp[row-1][1] : 0,
                col !== 2 ? dp[row-1][2] : 0,
                col < 3 ? dp[row-1][3] : 0
            );
        }
    }
    
    return Math.max(...dp[land.length - 1]);
}