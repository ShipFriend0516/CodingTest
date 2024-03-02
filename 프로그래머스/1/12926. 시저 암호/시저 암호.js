function solution(s, n) {
    return s.split('').map(c=> {
        if(c !== ' ') {
            return c.toUpperCase() === c ? 
                String.fromCharCode(((c.charCodeAt() + n) - 65) % 26 + 65)
                : 
                String.fromCharCode(((c.charCodeAt() + n) - 97) % 26 + 97)
        }
        return ' '
    }).join('')
}