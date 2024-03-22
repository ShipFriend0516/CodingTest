function solution(A,B){
    const length = A.length;
    let result = 0;
    A.sort((a,b)=>b-a)
    B.sort((a,b)=>a-b)
    for(let i=0;i<length;i++) result = result + A.pop()*B.pop()
    return result
}