function solution(numbers, target) {
    let count = 0;
    function dfs(numbers, index, current) {

        if(index === numbers.length && current === target) {
            count+=1;
            return;
        }
        else if(index === numbers.length && current !== target) {
            return;
        }
        dfs(numbers,index+1,current-numbers[index])
        dfs(numbers,index+1,current+numbers[index])
    }
    
    dfs(numbers, 0, 0);
    
    return count;
}