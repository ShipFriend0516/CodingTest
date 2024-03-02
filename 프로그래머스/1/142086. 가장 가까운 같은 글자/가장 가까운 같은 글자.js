function solution(s) {
    let location = {}
    let result = []
    
    for(let i=0;i<s.length;i++) {
        if(location.hasOwnProperty(s[i])) {
            result.push(i-location[s[i]])
            Object.assign(location, {[s[i]]: i})
        } else {
            result.push(-1)
            Object.assign(location, {[s[i]]: i})
        }
    }
    return result
}