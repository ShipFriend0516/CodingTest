function solution(m, n, board) {
    
    let gameover = true;
    let stack = [];
    let destroyCount = 0;
    board = board.map(row=> row.split(''))

    const checkFunc = (y,x) => {
        // 좌표를 받아 2x2인지 확인하는 함수
        const shape = board[y][x];
        if(shape === '') return;
        if(shape === board[y+1][x] 
        && shape === board[y][x+1] 
        && shape === board[y+1][x+1]) {
            // 2x2가 같으면 파괴 대기열에 넣음
            stack.push([y,x],[y+1,x],[y,x+1],[y+1,x+1])
        }
    }
    
    while(gameover) {
        for(let i=0;i<m-1;i++) {
            for(let j=0;j<n-1;j++) {
                // 각 위치에서 2x2인지 확인
                checkFunc(i,j)
            }
        }
    
        
        if(stack.length === 0) {
            gameover = false;
            break;
        }
        
        
        // 블록 파괴
        stack.forEach(([y,x])=> {
            if(board[y][x] !== '') {
                destroyCount++;
                board[y][x] = ''
            }
        })
        stack = []

        // 중력
        for(let i=m-2;i>=0;i--) {
            for(let j=0;j<n;j++) {
                if(board[i][j] !== '' && board[i+1][j] === '') {
                    for(let k=2;k<m-i;k++) {
                        if(board[i+k][j] === '' && i+k < m-1) {
                            // 밑이 비어있으면 내릴 높이 +
                            continue;
                        } else if(board[i+k][j] !== '') {
                            // 밑에 블럭이 있을 경우 그 위로 조정
                            board[i+k-1][j] = board[i][j]
                            board[i][j] = ''
                            break;
                        } else {
                            board[m-1][j] = board[i][j];
                            board[i][j] = ''
                            break;
                        }
                    }
                }
            }
        }
    }
    
    
    return destroyCount;
}

