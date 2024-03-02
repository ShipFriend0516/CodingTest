function solution(d, budget) {
    d.sort((a,b)=>a-b)
    for(let i=0;i<d.length;i++) {
        budget -= d[i];
        if(budget < 0) {
            return i;
        } else if (budget === 0) {
            return i+1;
        }
    }
    return d.length
}