function solution(survey, choices) {
    let R = 0;
    let C = 0;
    let J = 0;
    let A = 0;
    choices = choices.map(choice=> choice-4)
    console.log(choices)
    survey.forEach((type,index)=> {
        switch(type[0]) {
            case 'R':
                R-=choices[index]
                break;
            case 'T':
                R+=choices[index]
                break;
            case 'C':
                C-=choices[index]
                break;
            case 'F':
                C+=choices[index]
                break;
            case 'J':
                J-=choices[index]
                break;
            case 'M':
                J+=choices[index]
                break;
            case 'A':
                A-=choices[index]
                break;
            case 'N':
                A+=choices[index]
                break;
            default:
                break;
        }
    })
    console.log(R,C,J,A)
    let types = []
    if(R>=0) {
        types.push('R')
    } else {
        types.push('T')
    }
    
    if(C>=0) {
        types.push('C')
    } else {
        types.push('F')
    }
    
    if(J>=0) {
        types.push('J')
    } else {
        types.push('M')
    }
    
    if(A>=0) {
        types.push('A')
    } else {
        types.push('N')
    }
    
    return types.join('')
}