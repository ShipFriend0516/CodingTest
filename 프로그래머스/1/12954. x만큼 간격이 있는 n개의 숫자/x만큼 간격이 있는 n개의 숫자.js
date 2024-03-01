function solution(x, n) {
    var answer = [];
    let count = 0;
    for(let i=x;;i+=x) {
        answer.push(i);
        count+=1;
        if(count===n) {
            break;
        }
    }
    return answer;
}