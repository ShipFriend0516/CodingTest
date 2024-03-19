function solution(dartResult) { 
    let scores = dartResult.match(/\d+/g).map(Number)
    let bonuses = dartResult.match(/[SDT]/g)
    let options = dartResult.split(/\d+[SDT]/g).slice(1)
    bonuses = bonuses.map(bonus=> {
        switch(bonus){
            case 'S': 
                return 1;
            case 'D':
                return 2;
            case 'T':
                return 3;
        }
    })
    scores = scores.map((score,index)=> score ** bonuses[index])
    
    for(let i=0;i<3;i++) {
        if(options[i] === '#') {
            scores[i] *= -1;
        } else if(options[i] === '*') {
            scores[i] *=2;
            if(i-1>=0) scores[i-1] *=2; 
        }
    }

    return scores.reduce((a,b)=>a+b)
}