function solution(board, moves) {
    let stack = []
    let newBoard = []
    let count = 0;
    let N = board.length;
    moves = moves.map(move=>move-1)
    
    for(let row=0;row<N;row++) {
        newBoard.push([])
        for(let col=0;col<N;col++) {
            newBoard[row].push(board[col][row])
        }
        newBoard[row] = newBoard[row].filter(v=> v!==0)
        newBoard[row].reverse()
    }
    
    moves.forEach((move,index)=> {
        let doll = newBoard[move].pop()
        if(stack.length !== 0 && doll === stack[stack.length-1]) {
            stack.pop();
            count+=2;
        } else if(doll && doll !== stack[stack.length-1]){
            stack.push(doll)
        }
    })
    
    return count;
}