function solution(N, stages) {   
    let failRates = Array(N).fill()
    .map((_, index) => index + 1)
    .map(stage => {
        let failCount = 0;
        let playerCount = 0;
        for(let userStage of stages) {
            if(userStage >= stage ) {
                playerCount++;
                if(userStage === stage) failCount++;
            }
        }
        let failRate = failCount / playerCount ;
        return failRate || 0
    })
    let origin = failRates.slice()
    failRates.sort((a,b)=>b-a)
    
    return failRates.map((failRate,index)=>  { 
        let order = origin.indexOf(failRate)+1
        origin[order-1] = -1;
        return order;
    })
}