function solution(s)
{
    let stack = [];
    
    s.split('').forEach((s)=> {
        stack.push(s)
        
        if(stack.length>=2) {
            if(stack[stack.length-1] === stack[stack.length-2]) {
                stack.pop()
                stack.pop()
            }
        }
    })
    
    return stack.length === 0 ? 1 : 0;
}