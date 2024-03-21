function solution(today, terms, privacies) {
    today = new Date(today)
    let toDestroy = [];
    let termsObj = {}
    terms.forEach(term=> {
        termsObj[term.slice(0,1)] = +term.slice(1)
    })
    
    privacies.forEach((pri,index)=> {
        let priNumber = pri.slice(-1);
        let priDate = new Date(pri.slice(0,-2));
        priDate.setMonth(priDate.getMonth()+termsObj[priNumber])
        if(today >= priDate ) {
            toDestroy.push(index+1);
        }
    })
    
    return toDestroy;
}