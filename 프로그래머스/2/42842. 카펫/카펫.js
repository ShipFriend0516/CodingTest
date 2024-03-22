function solution(brown, yellow) {
    let XPlusY = (brown+4)/ 2;
    let maxHeight = XPlusY - 3;
    
    for(let h=3;h<=maxHeight;h++) {
        if(h * (XPlusY - h) === brown+yellow) {
            return [XPlusY-h, h]
        } 
    }
}