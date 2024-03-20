function solution(ingredient) {
    let ingredients = ingredient.slice();
    let length = ingredients.length;
    let count = 0;
    
    for(let i=0;i<length;i++) {
        if(ingredients[i] === 1) {
            if(ingredients[i + 1] === 2) {
                if(ingredients[i + 2] === 3) {
                    if(ingredients[i + 3] === 1) {
                        count++;
                        ingredients.splice(i, 4)
                        i -= 4;
                        length -=4;
                    }
                }
            }
        }
    }
    
    return count;
}
