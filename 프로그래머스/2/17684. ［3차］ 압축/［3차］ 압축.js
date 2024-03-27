function solution(msg) {
    const dictionary = new Map();
    const answer = [];
    for(let i=1;i<=26;i++) {
        dictionary.set(String.fromCharCode(64+i),i)
    }

    while(msg.length > 0) {
        const length = msg.length;
        for(let i=length;i>0;i--) {
            let wordIndex = dictionary.get(msg.slice(0,i))
            if(wordIndex) {
                answer.push(wordIndex)
                dictionary.set(msg.slice(0,i+1), dictionary.size + 1)
                msg = msg.slice(i);
                break;
            }
        }
    }
    return answer
}