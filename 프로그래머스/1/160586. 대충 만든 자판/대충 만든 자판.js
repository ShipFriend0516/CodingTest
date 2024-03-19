function solution(keymap, targets) {
    let maxLength = Math.max(...keymap.map(key=> key.length)) // 가장 긴 키맵의 길이
    keymap = keymap.map(key=> key.padEnd(maxLength,'0')) // 예외처리
    return targets.map(target=> { 
        let arr = [...target].map((char,index)=> { // 글자쪼개서
            let 입력수 = 0;
            for(let i=0;i<maxLength;i++) { // 키맵의 길이
                for(let key of keymap) { // 각 키맵과 비교
                    if(char === key[i]) {
                        return i+1 // 입력가능하면 인덱스를 반환
                    }
                }
            }
            return -1; // 입력못하면 -1
        })
        
        if (arr.some(element => element === -1)) {
            return -1; 
        } else {
            return arr.reduce((a, b) => a + b);
        }
    })
}