function solution(clothes) {
    var answer = 1;
    let closet = {}
    
    clothes.forEach(cloth=> {
        let name = cloth[0];
        let kind = cloth[1];
        if(closet[kind]) closet[kind]++;
        else closet[kind] = 1;
    })
    
    for(let property in closet) {
        answer *= closet[property]+1;
    }
    
    return answer-1;
}