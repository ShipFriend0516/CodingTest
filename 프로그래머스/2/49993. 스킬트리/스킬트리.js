function solution(skill, skill_trees) {
    return skill_trees.map(trees=> {
        let 현재선행진행도 = 0;
        console.log('유저스킬트리',trees)
        let isPossible = 1;
        for ( const s of trees) {
            if(skill.includes(s)) {
                console.log('현재 스킬',s)
                if(s === skill[현재선행진행도]) {
                    현재선행진행도++;
                } else if(s !== skill[현재선행진행도]) {
                    isPossible = 0;
                    break;
                }
            }
        }
        
        return isPossible;
    }).filter(v=>v===1).length
    
}