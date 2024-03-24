function solution(s) {
    let count = 0;
    let stack = []
    let brackets = {
        '(': ')',
        '{': '}',
        '[': ']',
    }
    
    for(let j=0;j<s.length-1;j++) {
         for(let i=0;i<s.length;i++) {
            stack.push(s[i])
            
            if(stack.length >= 2 && brackets[stack[stack.length-2]] === stack[stack.length-1]) {
                stack.pop();
                stack.pop();
            }
        }
        if(stack.length === 0) count++;
        stack = [];
        s = s.slice(1).concat(s.slice(0,1))
    }
   
    return count;
}