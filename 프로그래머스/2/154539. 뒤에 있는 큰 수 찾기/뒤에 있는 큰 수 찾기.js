function solution(numbers) {
    const answer = [];
    const stack = [];
    
    while(numbers.length > 0) {
        let num = numbers.pop();
        if(stack.length > 0) {
            for(let i=stack.length-1;i>=0;i--) {
                if(stack[i] === stack[i-1]) {
                    stack.splice(i,1)
                }
                if(stack[i] > num) {
                    answer.push(stack[i])
                    break;
                } else if(i===0) {
                    answer.push(-1)
                }
            }
            if(stack[stack.length-1] !== num) {
                if(stack[stack.length-1] >= num) {
                    stack.push(num)    
                } else {
                    stack.pop();
                    stack.push(num)
                }
            }
            
        } else {
            stack.push(num)
            answer.push(-1)
        }
    }
   
    return answer.reverse();
}