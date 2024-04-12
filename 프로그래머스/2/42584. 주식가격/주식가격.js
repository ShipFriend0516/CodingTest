function solution(prices) {
    const history = {};
    prices.forEach((price,index)=> {
        history[index] = 0;
    })
    
    for(let time=0;time<prices.length;time++) {
        for(let j=time+1;j<prices.length;j++) {
            if(prices[time] <= prices[j]) {
                history[time]++;
            } else {
                history[time]++;
                break;
            }

        }
    }
    
    return Object.values(history)
}