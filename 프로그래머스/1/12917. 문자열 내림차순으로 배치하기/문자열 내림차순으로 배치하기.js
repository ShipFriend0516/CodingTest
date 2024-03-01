function solution(s) {
    
    return s.split('')
        // .map(s=> s !== s.toUpperCase() ? s.toUpperCase() : s.toLowerCase())
        .sort((a,b)=> b.charCodeAt()- a.charCodeAt())
        .join('')
}