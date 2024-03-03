function solution(n, arr1, arr2) {
    let map1 = arr1.map(a=> a.toString(2).padStart(n,'0'))
    let map2 = arr2.map(b=> b.toString(2).padStart(n,'0'))
    let map3 = map1.map((a,i)=> (parseInt(a,2) | parseInt(map2[i],2)).toString(2).padStart(n,'0'))
    return map3.map(c=> c.replaceAll('1','#').replaceAll('0',' '));
}