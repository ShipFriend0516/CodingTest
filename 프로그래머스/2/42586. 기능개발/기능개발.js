function solution(progresses, speeds) {
    var answer = [];
    let count = 0;
    
    while(progresses.length > 0) {
        progresses = progresses.map((p,i) => p + speeds[i])
        if(progresses[0] >= 100) {
            count = 1;
            for(let i=1;i<=progresses.length;i++) {
                if(progresses[i] >= 100) {
                    count++;
                } else {
                    break;
                }
            }
            progresses = progresses.slice(count)
            speeds = speeds.slice(count)
            answer.push(count)
        }
    }
    
    return answer;
}