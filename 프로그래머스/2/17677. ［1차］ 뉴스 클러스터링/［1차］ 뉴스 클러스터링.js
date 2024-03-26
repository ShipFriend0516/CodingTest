function solution(str1, str2) {
    str1 = str1.toUpperCase()
    str2 = str2.toUpperCase()
    let A = [];
    let B = [];
    let expression = /^[A-Z]+$/
    for(let i=0;i<str1.length-1;i++) {
        let part = str1[i] + str1[i+1];
        if(expression.test(part)) A.push(part)
    }
    for(let i=0;i<str2.length-1;i++) {
        let part = str2[i] + str2[i+1];
        if(expression.test(part)) B.push(part)
    }
    let UnionSet = []
    let IntersectionSet = []
    let J = 0;
    A.forEach(a=> {
        if(UnionSet.includes(a)) {
            let limit = Math.max(A.filter(e=>e===a).length, B.filter(e=>e===a).length) 
            if(UnionSet.filter(u=>u===a).length < limit) UnionSet.push(a)
        } else UnionSet.push(a)
        if(B.includes(a)) {
            let limit = Math.min(A.filter(e=>e===a).length, B.filter(e=>e===a).length) 
            if(IntersectionSet.filter(u=>u===a).length < limit) IntersectionSet.push(a)
        }
    })
    B.forEach(b=> {
        if(UnionSet.includes(b)) {
            let limit = Math.max(A.filter(e=>e===b).length, B.filter(e=>e===b).length) 
            if(UnionSet.filter(u=>u===b).length < limit) UnionSet.push(b)
        } else UnionSet.push(b)
        if(A.includes(b)) {
            let limit = Math.min(A.filter(e=>e===b).length, B.filter(e=>e===b).length) 
            if(IntersectionSet.filter(u=>u===b).length < limit) IntersectionSet.push(b)
        }
    })
    console.log(UnionSet)
    console.log(IntersectionSet)
    J = IntersectionSet.length / UnionSet.length;
    
    return UnionSet.length === 0 ? 65536 : Math.floor(J * 65536)
}