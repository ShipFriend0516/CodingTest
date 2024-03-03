function solution(cards1, cards2, goal) {
    let c1Index = 0, c2Index = 0;
    for(let i=0;i<goal.length;i++) {
       if(goal[i] === cards1[c1Index]) {
           c1Index++;
       } else if(goal[i] === cards2[c2Index]) {
           c2Index++;
       } else return 'No'
    }
    return 'Yes';
}