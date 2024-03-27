function solution(phone_book) {
    let hash = [];
    phone_book.forEach((p,i)=> {
        hash.push(p);
    })
    
    hash.sort()
    console.log(phone_book)
    
    for(let i=0;i<hash.length-1;i++) {
        if(hash[i] === hash[i+1].slice(0,hash[i].length)) return false;
    }
    return true;
}