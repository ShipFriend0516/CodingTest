function solution(n) {
    let start = 1;
    let count = 0;
    let sum;
    while(start<n/2) {
        sum = 0
        for(let i=start;i<n;i++) {
            sum += i
            if(sum === n) {
                count++;
                break;
            } else if(sum > n) {
                break;
            }
        }
       start++;
    }

    
    return count+1;
}