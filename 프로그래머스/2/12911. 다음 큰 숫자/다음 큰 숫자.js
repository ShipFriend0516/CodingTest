function solution(n) {
    var answer = 0;
    let index = 1;
    let found = true;
    
    while(found) {
        let binary = (n).toString(2)
        let next = (n+index).toString(2)
        if(binary.replaceAll('0','').length === next.replaceAll('0','').length) { 
            found = false;
        }
        index++;
    }
    return n+index-1;
}