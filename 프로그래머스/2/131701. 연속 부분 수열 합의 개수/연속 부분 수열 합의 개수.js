function solution(elements) {
    let repeat = elements.length;
    let set = new Set()
    elements = [...elements,...elements]
    for(let i=1;i<=repeat;i++) {
        let continuous = []
        for(let j=0;j<repeat;j++) {
            set.add(elements.slice(j,j+i).reduce((a,b)=>a+b))
        }
    }
    return set.size
}