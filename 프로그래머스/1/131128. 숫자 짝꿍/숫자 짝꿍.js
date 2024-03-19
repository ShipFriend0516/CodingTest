function solution(X, Y) {
    let numbersX= new Map();
    let numbersY= new Map();
    let numbersZ= new Map();
    let result = []
    for(let x of [...X]) {
        if (numbersX.get(x)) numbersX.set(x,numbersX.get(x)+1)
        else numbersX.set(x,1) 
    }
    for(let y of [...Y]) {
        if (numbersY.get(y)) numbersY.set(y,numbersY.get(y)+1)
        else numbersY.set(y,1)    
    }
    
    if(numbersX.size > numbersY.size) [numbersX, numbersY] = [numbersY, numbersX]
    for(let [k,v] of numbersX) {
        if(numbersY.get(k)) {
            numbersZ.set(k,Math.min(numbersY.get(k), v)) 
        }
    }
    if(numbersZ.size === 0) return "-1"
    else if(numbersZ.get('0')>0 && numbersZ.size === 1) return '0'
    else {
        for(let [k,v] of numbersZ) {
            for(let i=0;i<v;i++)
                result.push(k)
        }
        return result.sort((a,b)=>b-a).join('')
    }
    
}