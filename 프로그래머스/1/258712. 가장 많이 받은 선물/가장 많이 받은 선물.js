function solution(friends, gifts) {

    let giftsLog = {}
    let receive = {};
    let giftScore = {};
    let nextGifts = {};
    
    friends.forEach(friend=> {
        giftsLog[friend] = [];
        receive[friend] = 0;
        giftScore[friend] = 0;
        nextGifts[friend] = 0;
    })
    
    gifts.forEach(gift=> {
        let trans = gift.split(' ');
        
        if(giftsLog[trans[1]]) {
            giftsLog[trans[1]].push(trans[0])
        }
    })

    friends.forEach((from,index)=> {
        for(let i=0+index;i<friends.length;i++) {
            let to = friends[i];
            if(to!==from && Array.isArray(giftsLog[to]) && Array.isArray(giftsLog[from])) {
                let A = giftsLog[to].filter(gift=>gift===from).length;
                let B = giftsLog[from].filter(gift=>gift===to).length;
                giftScore[from] += A;
                giftScore[to] += B;         
            }
        }
        giftScore[from] -= giftsLog[from].length;
    })
    
    friends.forEach((friend,index)=> {
        for(let i=index;i<friends.length;i++) {
            let to = friends[i];
            let A = giftsLog[to].filter(owner=> owner === friend).length 
            let B = giftsLog[friend].filter(owner=> owner===to).length;
            if(A > B) {
                nextGifts[friend]++;
            } else if(A < B) {
                nextGifts[to]++;
            } else {
                if(giftScore[friend] > giftScore[to]) {
                    nextGifts[friend]++;
                } else if(giftScore[friend] < giftScore[to]){
                    nextGifts[to]++;
                }
            }
            
        }
    })
    return Math.max(...Object.values(nextGifts))
}