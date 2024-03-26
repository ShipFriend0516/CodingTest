function solution(priorities, location) {
    let queue = [...priorities];
    let prioritiesObj = {};
    priorities.forEach((priority,index)=> {
        prioritiesObj[index] = priority
    })
    let i = 0;
    let count = 0;
    
    while(queue.length > 0) {
        let maxPriority = Math.max(...queue);
        let process = queue[0];
        if(process < maxPriority) {
            // 뒤로보냄
            queue.shift();
            queue.push(process)
        } else {
            // 실행
            count++;
            queue.shift();
            if(location===0) {
                break;
            } 
        }
        location -=1;
        if(location < 0) {
            location = queue.length-1;
        }
    }
    return count
}