function solution(k, score) {
    let 명예의전당 = [];
    let 최하위점수리스트 = []
    for(let i=0;i<score.length;i++) {
        명예의전당.push(score[i])
        명예의전당.sort((a,b)=> b-a)
        if(명예의전당.length>k) {
            명예의전당.pop()
        }
        최하위점수리스트.push(명예의전당[명예의전당.length-1])
    }
    return 최하위점수리스트;
}