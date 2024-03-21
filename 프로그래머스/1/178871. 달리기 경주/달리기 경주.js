function solution(players, callings) {
    let playerPosition = {}
    
    players.forEach((player,index)=> {
        playerPosition[player] = index;
    })
    callings.forEach(call=> {
        let position = playerPosition[call]
        let 추월당하는선수 = players[position-1]
        playerPosition[call]--;
        playerPosition[추월당하는선수]++;
        players[position] = 추월당하는선수
        players[position-1] = call;
    })
    return players
}