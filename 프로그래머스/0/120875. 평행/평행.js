const solution = (dots) => {
    const getRatio = (dotA,dotB) => {
        const [ax,ay] = dotA;
        const [bx,by] = dotB;
        return (by-ay) / (bx-ax);
    }
    
    const lines = [
        [0,1,2,3],
        [0,2,1,3],
        [0,3,2,1],
    ]
    
    for (const [a,b,c,d] of lines) {
        const aRatio = getRatio(dots[a],dots[b])
        const bRatio = getRatio(dots[c],dots[d])
        if(aRatio === bRatio) return 1;
    }
    return 0;
}