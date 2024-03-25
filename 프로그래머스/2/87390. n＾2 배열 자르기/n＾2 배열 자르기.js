function solution(n, left, right) {
    let arr = []
    let skip = 0;
    for(let i=0;i<n;i++) {
        if(left>n*(i+1)) {
            skip++;
            continue;
        }
        for(let j=0;j<i+1;j++) {
            arr.push(i+1)
        }
        for(let j=i+1;j<n;j++) {
            arr.push(j+1)
        }
        if(right<n*(i+1)) break;
        
    }
    
    return arr.slice(left-(skip*n),right+1-(skip*n));
}