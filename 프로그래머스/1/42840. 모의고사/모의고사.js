function solution(answers) {
    let answer =[]
    const first = [1,2,3,4,5,];
    const second = [2,1,2,3,2,4,2,5]
    const third = [3,3,1,1,2,2,4,4,5,5];
    let f=0,s=0,t=0;
    answers.forEach((a,i)=> {
        if(a===first[i%first.length]) f++;
        if(a===second[i%second.length]) s++;
        if(a===third[i%third.length]) t++; 
    })
    let scores = [f,s,t]
    let max = Math.max(...scores)
    scores.forEach((score,index)=> {
        if(score === max) answer.push(index+1)  
    })
    return answer;
}