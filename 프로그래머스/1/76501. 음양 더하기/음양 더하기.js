function solution(absolutes, signs) {
    return absolutes.map((num, idx)=> signs[idx] ? num : -num).reduce((a,b)=> a+b)
}