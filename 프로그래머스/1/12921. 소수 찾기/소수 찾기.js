function solution(n) {
    let mainCount = 0;
    let count = 0;
    for(let a = 1;a<=n; a++){
        count = 0;
        let sqrtNum = Math.sqrt(a);
        for(let i=1;i<=sqrtNum;i++) {
            if(a % i === 0) count += 2;
            if(count > 2) break;
        }
        if(count <= 2) mainCount++;
    }
    return mainCount-1;
}