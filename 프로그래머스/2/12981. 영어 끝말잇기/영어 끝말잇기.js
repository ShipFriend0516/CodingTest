function solution(n, words) {
    let log = {};
    let failNumber = 0;
    let failOrder = 0;
    for(let i=0;i<words.length;i++) {
        let word = words[i];
        if(log[word] === true) {
            failNumber = i % n + 1;
            failOrder = Math.floor(i / n) + 1;
            return [failNumber,failOrder];
        } else if((i>=1 && i<words.length) && words[i-1].slice(-1) !== word[0]) {
            failNumber = i % n + 1;
            failOrder = Math.floor(i / n) + 1; 
            return [failNumber,failOrder];
        } else {
            log[word] = true;   
        }
    }
    return [failNumber,failOrder];
}
