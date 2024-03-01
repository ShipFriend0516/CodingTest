function solution(arr1, arr2) {

    return arr1.reduce((acc, cur, rIdx) => {
        const newRow = cur.reduce((acc,cur,cIdx)=> acc.concat(cur + arr2[rIdx][cIdx]),[])
        return acc.concat([newRow])
    },[])
}