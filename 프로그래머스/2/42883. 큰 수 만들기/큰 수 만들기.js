function solution(number, k) {
    const stack = [];
    for(const n of number) {
        while(k > 0 && stack.length > 0 && stack.at(-1) < n) {
            stack.pop();
            k-=1;
        }
        stack.push(n)
    }
    
    return k > 0 ? stack.slice(0,-k).join('') : stack.join('')
}