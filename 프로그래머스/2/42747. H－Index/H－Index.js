function solution(citations) {
    const maxCitation = Math.max(...citations);
    for(let h=maxCitation;h>=0;h--) {
        let count = 0;
        citations.forEach(citation => {
            if(citation > h) {
                count++;
            }
        })
        if(count >= h ) {
            return h;
        }
    }
}