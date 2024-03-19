function solution(s) {
    let x;
    let xCount=0, xNotCount=0;
    let arr= []
    let isStop = true;
    while(s.length>0 && isStop) {
        x=s[0]
        
        for(let i=0;i<s.length;i++){
            x === s[i] ? xCount++ : xNotCount++;
            if(xCount === xNotCount) {
                arr.push(s.slice(0,i+1))
                s = s.slice(i+1)
                break;
            }
            
            if(i===s.length-1 && xCount!==xNotCount) {
                arr.push(s[s.length-1])
                isStop=false
            }
        }
    }
    return arr.length;
}