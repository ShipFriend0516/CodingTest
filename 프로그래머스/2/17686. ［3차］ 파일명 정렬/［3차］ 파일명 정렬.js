function solution(files) {
    files = files.map(file=> {
        const [head,number,...tails] = file.split(/(\d+)/)
        return [head,number,tails.join('')]

    })
     
    const compare = (a,b)=> {
       if(a[0].toUpperCase() > b[0].toUpperCase()) {
           return 1;
       } else if(a[0].toUpperCase() < b[0].toUpperCase()) {
           return -1;
       } else if(a[0].toUpperCase() === b[0].toUpperCase()) {
           if(parseInt(a[1]) > parseInt(b[1])) {
               return 1
           } else if(parseInt(a[1]) < parseInt(b[1])) {
               return -1;
           } else if(parseInt(a[1]) === parseInt(b[1])){
               return 0;
           }
       }
    }
    
    return files.sort(compare).map(v=>v.join(''))
}