function solution(arr) {
    let min = Math.min(...arr)
    let idx = arr.indexOf(min);
    
    console.log(arr.slice(0,idx).concat(arr.slice(idx+1)))
    return arr.length <= 1 ? [-1] :arr.slice(0,idx).concat(arr.slice(idx+1)) ;
}