function solution(s){
    let str = s.toUpperCase()
    let result = 0;
    for(let i in str) {
        if(str[i]==='P') result++;
        else if(str[i]==='Y') result--;
    }
    return result === 0 ? true : false;
}