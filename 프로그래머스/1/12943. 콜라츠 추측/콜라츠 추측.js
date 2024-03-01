function solution(num) {
    let count=0;
    
    while(true) {
        if(num === 1) return 0;
        else if(count > 500) return -1;
        num%2 ? num = num*3+1 : num/=2
        count++;
        if(num===1) return count;
    }
    
    
}  