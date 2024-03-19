function solution(lottos, win_nums) {
    let 당첨번호수 = 0;
    let 동생놈이가린번호개수 = lottos.filter(lotto=>lotto===0).length;
   
    lottos.forEach(lotto=> win_nums.includes(lotto) && 당첨번호수++)
    let 최소등수 = 7-당첨번호수 === 7 ? 6: 7-당첨번호수;
    let 최대등수 = 7-(당첨번호수+동생놈이가린번호개수) === 7 ? 6 : 7-(당첨번호수+동생놈이가린번호개수);
    
    return [최대등수, 최소등수]
}