function solution(bandage, health, attacks) {
    // 시전 시간 | 초당 회복량 | 추가 회복량
    
    const maxHealth = health;
    let castingTime = bandage[0];
    let healPerSecond = bandage[1];
    let bonusHeal = bandage[2];
    let maxTime = 0;
    let successionTime = 0;
    
    
    let attackTiming = {}
    for(let [attackTime, attackDamage] of attacks) {
        attackTiming[attackTime] = attackDamage;
        maxTime = attackTime;
    }
    
    for(let now=1;now<=maxTime;now++) {
        if(attackTiming[now]) {
            health -= attackTiming[now];
            successionTime = 0;
            if(health<=0) return -1;
        } else {
            health += healPerSecond;
            health = health > maxHealth ? maxHealth : health;
            successionTime++;
        }
        
        if((successionTime / castingTime) >= 1) {
            health += bonusHeal;
            health = health > maxHealth ? maxHealth : health;
            successionTime = 0;
        }
    }
    return health;
}