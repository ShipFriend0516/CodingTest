function solution(numbers) {
    let answer = []
    for(let i=0;i<numbers.length;i++) {
        for(let j=0;j<numbers.length;j++) {
            if(i!==j) {
                let number = numbers[i]+numbers[j];
            
                if(!answer.includes(number) )
                    answer.push(number)
                }
        }
    }
    

    return answer.sort((a,b)=>a-b);
}