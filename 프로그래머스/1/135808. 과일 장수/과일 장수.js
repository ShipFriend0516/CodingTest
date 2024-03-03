function solution(k, m, score) {
    var answer = 0;
    score.sort()
    let length = score.length;
    for(let i=1;i<=Math.floor(length / m); i++)
        answer += score[length-m*i] * m
    return answer
}

