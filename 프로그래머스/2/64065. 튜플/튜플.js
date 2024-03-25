function solution(s) {
    var answer = []
    let arr= s.split('},{').map(s=>s.replace(/[{}]/g,'')).map(s=>s.split(',').map(a=>parseInt(a)))
    arr.sort((a,b)=>a.length-b.length)
    for(let i=0;i<arr.length;i++) {
        if(i===0) {
            answer.push(arr[i][0])
        } else {
            let A = new Set(answer);
            let B = new Set(arr[i])
            A.forEach(a=> {
                if(B.has(a)) B.delete(a)
            })
            answer.push(...B)
        }
    }
    
    return answer;
}