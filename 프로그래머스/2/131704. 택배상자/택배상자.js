function solution(order) {
    const mainContainer = [];
    const subContainer = [];
    
    let count = 0;
    let box = 1;
    let flag = true;
    
    while(flag) {
        if(box <= order.length) {
            if(subContainer[subContainer.length-1] && subContainer[subContainer.length-1] === order[count]) {
                count++;
                subContainer.pop()
            } else if(box === order[count]) {
                count++;
                box++;
            } else {
                subContainer.push(box)
                box++;
            }
        } else {
            if(subContainer[subContainer.length-1] && subContainer[subContainer.length-1] === order[count]) {
                count++;
                subContainer.pop()
            } else if(subContainer[subContainer.length-1] &&  subContainer[subContainer.length-1] !== order[count]){
                flag = false;
            } else {
                flag = false;
            }
        }
        
        if(count === order.length) flag=false;
    }
    
  
    return count
}