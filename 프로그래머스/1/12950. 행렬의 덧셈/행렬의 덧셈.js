function solution(arr1, arr2) {
    return arr1.map((a,idx)=> a.map((aValue, idx2)=> aValue+= arr2[idx][idx2]))
}