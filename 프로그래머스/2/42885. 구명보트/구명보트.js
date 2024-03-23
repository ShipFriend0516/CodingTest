function solution(people, limit) {
    let sum=0;
    let count=0;
    const length=people.length;
    people.sort((a,b)=> a-b);

    for(let i=0;people.length!==0;i++) {
        let person = people.pop() // 남은 사람 중 가장 무거운 한 명 태워
    
        sum+=person // 태워
        
        let 남은공간 = limit - person;
        

        if(people[0] <= 남은공간) {
            sum+=people[0]
            남은공간 -= people[0]
            people.shift();
        } 
        count++;
        sum=0;
    }
    return count;
    
}