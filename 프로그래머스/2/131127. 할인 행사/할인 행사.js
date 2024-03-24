function solution(want, number, discount) {
    let firstDay = 0;
    let count = 0;
    let cart = {};
    let wantObj = {};
    let stop = true;
    const allProductNumber = number.reduce((a,b)=>a+b)
    for(let w of want) {
        if(!discount.includes(w)) {
            return 0;
        }
    }
    
    for(let i=0;i<want.length;i++) {
        wantObj[want[i]] = number[i];
    }
    
    for(let day=0; day<=discount.length - allProductNumber;day++) {
        cart = {};
        for(let w of want) {
            cart[w] = 0;
        }
        for(let i=day;i<day+allProductNumber;i++) {
            cart[discount[i]]++;
            
        }
        for(let i=0;i<want.length;i++) {
            if(i===want.length-1 && cart[want[i]] === wantObj[want[i]]) {       
                count++
            } else if(cart[want[i]] !== wantObj[want[i]]) {
                break;
            }
        }
    }
    

    return count;
}