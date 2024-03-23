function solution(arr) {
    let condition = true;
    let i=1;
    let max = Math.max(...arr);
    
    while(condition) {
        let number = max * i;
        for(let j=0;j<arr.length;j++) {
            if(number % arr[j] === 0) {
                if(j===arr.length-1) {
                    return number;
                }
                continue;
            } else {
                i++;
                break;
            }
        }
    }
} 