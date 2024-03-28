function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const queue = [[0,0]];
    const moves = [[-1,0], [1,0], [0,-1],[0,1]]
    const visited = Array.from(Array(n), () => Array(m).fill(false));
    visited[0,0] = true;
    
    while(queue.length > 0) {
        let [row,col] = queue.shift();
         
        if (row === n - 1 && col === m - 1) {
            return maps[row][col];
        }
        for(let i=0;i<4;i++) {
            let toRow = row + moves[i][0];
            let toCol = col + moves[i][1];
            
            if (toRow >= 0 && toRow < n && toCol >= 0 && toCol < m && maps[toRow][toCol] === 1 && !visited[toRow][toCol]) {
                queue.push([toRow, toCol]);
                visited[toRow][toCol] = true;
                maps[toRow][toCol] = maps[row][col] + 1;
            }

        } 
        
    }
    return -1;
}