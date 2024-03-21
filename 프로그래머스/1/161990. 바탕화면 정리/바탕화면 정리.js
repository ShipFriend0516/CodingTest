function solution(wallpaper) {
    var answer = [];
    let lux, luy, rdx, rdy;
    let reverse = wallpaper.slice().reverse();
    let indexMap = wallpaper.map(row=> row.split('').map((r,i)=> r==='#' ?  i: -1 ))

    for(let i=0;i<wallpaper.length;i++) {
        if(wallpaper[i].includes('#')) {
            luy = i;
            break;
        }
    }
    for(let i=0;i<wallpaper.length;i++) {
        if(reverse[i].includes('#')) {
            rdy = wallpaper.length-i;
            break;
        }
    }
    lux = Math.min(...indexMap.flat().filter(v=>v!==-1));
    rdx = Math.max(...indexMap.flat())+1;
    
    return [luy,lux,rdy,rdx];
}

