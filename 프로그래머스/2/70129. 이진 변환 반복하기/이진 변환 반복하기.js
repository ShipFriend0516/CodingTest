function solution(s) {
    let count=0;
    let replacedZero=0;
    while(s!=='1') {
        let before = s.length;
        s = s.replaceAll('0','');
        let after = s.length;
        replacedZero += before-after;
        let digit = s.length;
        let binary = digit.toString(2)
        s = binary;
        count++;
    } 
    return [count,replacedZero]
}