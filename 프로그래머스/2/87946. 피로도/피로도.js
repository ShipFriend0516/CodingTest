function solution(k, dungeons) {
    const n = dungeons.length;
    let maxCount = 0;
    
    function dfs(currentK, count, visited) {
        maxCount = Math.max(maxCount, count);
        
        for (let i = 0; i < n; i++) {
            if (!visited[i] && currentK >= dungeons[i][0]) {
                visited[i] = true;
                dfs(currentK - dungeons[i][1], count + 1, visited);
                visited[i] = false;
            }
        }
    }
    
    const visited = new Array(n).fill(false);
    dfs(k, 0, visited);
    
    return maxCount;
}