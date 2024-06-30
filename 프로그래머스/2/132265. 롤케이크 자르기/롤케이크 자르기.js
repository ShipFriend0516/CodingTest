function solution(topping) {
    let count =0 ;
   
    let myCount = 0;
    let yourCount = 0;
    const mine = new Set();
    const yours = topping;
    const toppingMap = new Map();
    
    // 토핑 리스트 만들기
    for(const t of topping) {
        toppingMap.set(t, toppingMap.get(t)+1 || 1)
    }
    // 니가 갖고있는 토핑 종류
    yourCount = toppingMap.size;
    
    for(const t of topping) {
        if(!mine.has(t)) mine.add(t);
        // 토핑 리스트에서 하나 제거
        toppingMap.set(t, toppingMap.get(t) - 1)
        // 토핑 개수가 0개라면 모두 소진한 것이므로 yourCount - 1
        if(toppingMap.get(t) === 0) yourCount--;
        
        // 내 토핑의 종류 개수와 니 토핑의 종류 개수가 같다면 카운트 증가
        if(mine.size === yourCount) count++;
    }
    
    return count
}