function solution(n, m, section) {
    let result = 1;
    let paintedWall = section[0] + m;
    for(let i=0;i<section.length;i++) {
        if(section[i] < paintedWall) {
            continue;
        } else {
            paintedWall = section[i] + m;
            result++;
        }
    }
    return result
}
