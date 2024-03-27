function solution(word) {
    let words = ['A','E','I','O','U'];
    let dict = new Set();
    function dfs(current, length, visited) {
        for(let i=0;i<5;i++) {
            if(length <= 5 && !visited[length]) {
                visited[length] = true;
                
                dict.add(current);
                dfs(current + words[i], length+1, visited)
                visited[length] = false;
            } else {
                return;
            }
        }
    }
    
    const visited = Array(5).fill(false);
    dfs("",0,visited)
    const sortedDict = [...dict].sort()
    return sortedDict.indexOf(word)
}