const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../dev/stdin.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()


const solution = (input) => {
    const [N,r,c] = input.split(' ').map(Number)
    let count = 0;
    const result = decreaseDimension(count, N, c, r)
    return result
}

//  2 3 1
// decreaseDimension(count, 2, 3, 1);
// decreaseDimension(48, 2, 3, 3);
//
const decreaseDimension = (count, N, posX,posY) => {
    if( N!==1) {
        const length = Math.pow(2, N);
        const x = posX - (length/2);
        const y = posY - (length/2);

        if(x < 0 && y < 0) {
            // 1
            return  decreaseDimension(count, N-1, posX, posY);
        } else if( x >= 0 && y < 0) {
            // 2
            count += (Math.pow( length / 2, 2));
            return decreaseDimension(count, N-1, posX - (length/2), posY)
        } else if(x < 0 && y >= 0) {
            // 3
            count += (Math.pow( length / 2, 2)) * 2;
            return decreaseDimension(count, N-1, posX  , posY - (length/2))
        } else if ( x >= 0 && y >= 0) {
            // 4
            count += (Math.pow( length / 2, 2)) * 3;
            return decreaseDimension(count, N-1, posX - (length/2), posY - (length/2))
        }
    } else {
        // N == 1
        const opers = [[0,1] ,[ 2, 3]];
        return count + opers[posY][posX]
    }
}

console.log(solution(input));

