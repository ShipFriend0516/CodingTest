function solution(s, skip, index) {
    let alphabetCodes = Array(26).fill(97).map((v,i)=>(v+i))
    let strSkip = skip.split('').map(s=>s.charCodeAt())
    let strCodes = s.split('')
    let filtered = alphabetCodes.filter(code=> !strSkip.includes(code)).map(code=> String.fromCharCode(code))
    
    return strCodes.map(code=> filtered[(filtered.indexOf(code) + index) % filtered.length]).join('')
}