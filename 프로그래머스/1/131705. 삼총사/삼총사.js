function solution(number) {
    let arr= []
    for(let i=0;i<number.length;i++) {
       for(let j=0;j<number.length;j++) {
           for(let k=0;k<number.length;k++) {
               if(!(i===j || j===k || k===i) && number[i]+number[j]+number[k] === 0) {
                   arr.push([number[i],number[j],number[k]].sort())
               }
           }
       }
    }
    
    return arr.length/6;
}