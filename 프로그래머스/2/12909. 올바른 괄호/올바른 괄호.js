function solution(s){
    let stack = [];
    let open = '(';
    let close = ')';
    
    [...s].forEach(s=> {
        stack.push(s)
        if(stack.length >= 2) {
            if(stack[stack.length - 2] === open && stack[stack.length - 1] === close) {
                stack.pop();
                stack.pop();
            }
        }
    })
    
    return stack.length === 0 ? true : false;

}