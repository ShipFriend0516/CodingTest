function solution(dirs) {
    
    let dirsplit = dirs.split('');
    const visited = new Set();
    const pos = [5,5] // 0,0
    
    
    dirsplit.forEach(move=> {
        const [y,x] = pos;
        let history = [y,x];
        switch(move) {
            case 'U':
                if(y-1 >= 0) {
                    pos[0]-=1;
                    visited.add([y,x, ...pos].join(''))
                    visited.add([...pos,y,x].join(''))
                } 
                break;
            case 'D':
                if(y+1 <= 10) {
                    pos[0]+=1;
                    visited.add([y,x, ...pos].join(''))
                    visited.add([...pos,y,x].join(''))
                } 
                break;
            case 'R':
                if(x+1 <= 10) {
                    pos[1]+=1;
                    visited.add([y,x, ...pos].join(''))
                    visited.add([...pos,y,x].join(''))
                } 
                break;
            case 'L':
                if(x-1 >= 0) {
                    pos[1]-=1;
                    visited.add([y,x, ...pos].join(''))
                    visited.add([...pos,y,x].join(''))
                } 
                break;
            default:
                break;
        }
    })
    
    return visited.size / 2;
}