function solution(x, y, n) {
    const queue = [y];
    const visited = new Set([y]);
    
    const plus = (num) => num - n;
    const double = (num) => num % 2 === 0 ? num / 2 : -1;
    const triple = (num) => num % 3 === 0 ? num / 3 : -1;
    
    let level = 0;
    
    while(queue.length > 0) {
        const length = queue.length;
        
        for(let i=0;i<length;i++) {
            const num = queue.shift();
            if(num === x) {
                return level;
            } else {
                const p = plus(num);
                const d = double(num);
                const t = triple(num);
                if(p >= x && !visited.has(p)) {
                    queue.push(p);
                    visited.add(p);
                }
                if(d >= x && !visited.has(d)) {
                    queue.push(d);
                    visited.add(d);
                }
                if(t >= x && !visited.has(t)) {
                    queue.push(t);
                    visited.add(t);
                }
            }
        }
        level++;
    }
    
    return -1;
}