function solution(numbers, hand) {
    let left = [3,0], right = [3,2];
    
    return numbers.map(number=> {
        if([1,4,7].includes(number)) {
            left = [[1,4,7].indexOf(number), 0]
            return 'L'
        } else if([3,6,9].includes(number)) {
            right = [[3,6,9].indexOf(number), 2]
            return 'R'
        } else {
            let pos = [2,5,8,0].indexOf(number)
            let leftDis = Math.abs(pos-left[0]) + Math.abs(1-left[1])
            let rightDis = Math.abs(pos-right[0]) + Math.abs(1-right[1])

            if(leftDis < rightDis) {
                left = [pos, 1]
                return 'L'
            } else if(leftDis > rightDis) {
                right = [pos, 1]
                return 'R'
            } else {
                if(hand === 'right') {
                    right = [pos,1]
                    return 'R'
                } else {
                    left = [pos,1]
                    return 'L'
                }
            }
        }
    }).join('')
}