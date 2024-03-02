function solution(sizes) {
    let maxWidth = 0, maxHeight = 0;
    for(const [w,h] of sizes) {
        // 가로와 세로 중 길이가 더 긴 곳을 가로로 취급
        maxWidth = Math.max(maxWidth,Math.max(w,h));
        maxHeight = Math.max(maxHeight,Math.min(w,h));
    }
    return maxWidth * maxHeight
}