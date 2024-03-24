function solution(k, tangerine) {
    let tangerineCount = {};
    let kind = new Set(tangerine) 
    let count = 0;
    
    tangerine.forEach(tan=> {
        if(tangerineCount[tan]) tangerineCount[tan]++;
        else tangerineCount[tan] = 1;
    })

    let kindTangerine = Object.values(tangerineCount).sort((a,b)=>a-b)
    
    while(k>=1) {
        k-=kindTangerine.pop()
        count++;
    }
    return count;
}