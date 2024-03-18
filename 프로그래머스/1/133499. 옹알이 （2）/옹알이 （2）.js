function solution(babbling) {
    let count = 0;
    let filteredBabbling = babbling.map(babbling=> {
       return babbling
        .replaceAll('ayaaya', 'xxx')
        .replaceAll('yeye', 'xxx')
        .replaceAll('woowoo', 'xxx')
        .replaceAll('mama', 'xxx')
        .replaceAll('aya', '_')
        .replaceAll('ye', '_')
        .replaceAll('woo', '_')
        .replaceAll('ma', '_')
    })
    console.log(filteredBabbling)
    
    return filteredBabbling.filter(babbling=> babbling.replaceAll('_','').length === 0).length
    
}