function solution(park, routes) {
    let pos = park.map((row,index)=> [index,row.indexOf('S')]).filter(pos=> pos[1]>-1).flat()
    const Width = park[0].length;
    const Height = park.length;
    let moveToPos;
    console.log('시작지점', pos)
    for(let i=0;i<routes.length;i++) {
        let command = routes[i];
        let move = +command[2];
        let check = true;
        let y = pos[0]; // 세로 위치
        let x = pos[1]; // 가로 위치
        
        switch(command[0]) {
            case 'N':
                moveToPos = [y-move,x]
                if(moveToPos[0] < 0 || moveToPos[0] >= Height ) continue;
                for(let h=y-1;h>=moveToPos[0];h--) {
                    if(park[h][x] === 'X') check=false;
                }          
                if(check) pos = moveToPos;
                break;
            case 'S':
               moveToPos = [y+move,x]
                if(moveToPos[0] < 0 || moveToPos[0] >= Height ) continue;
                for(let h=y+1;h<=moveToPos[0];h++) {
                    if(park[h][x] === 'X') check=false;
                }          
                if(check) pos = moveToPos;
                break;
            case 'W':
                moveToPos = [y,x-move]
                if(moveToPos[1] < 0 || moveToPos[1] >= Width ) continue;
                for(let w=x-1;w>=moveToPos[1];w--) {
                    if(park[y][w] === 'X') check=false;
                }          
                if(check) pos = moveToPos;
                break;
            case 'E':
                moveToPos = [y,x+move]
                if(moveToPos[1] < 0 || moveToPos[1] >= Width ) continue;
                for(let w=x+1;w<=moveToPos[1];w++) {
                    if(park[y][w] === 'X') check=false;
                }   
                if(check) pos = moveToPos;
                break;
            default: 
                break;
        }
    }
   
    return pos;
}