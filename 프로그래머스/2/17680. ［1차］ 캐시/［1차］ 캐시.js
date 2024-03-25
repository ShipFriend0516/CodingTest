function solution(cacheSize, cities) {
    let cache = [];
    let runtime = 0;
    cities.forEach((city)=> { 
        city = city.toUpperCase();
        if(cache.includes(city)) {
            cache = cache.filter(item=> item !== city)
            cache.push(city)
            runtime += 1;
        } else if(!cache.includes(city) && cache.length >= cacheSize){
            runtime += 5;
            cache.push(city)
            cache.shift();
        } else {
            runtime += 5;
            cache.push(city)
        }
    })
    
    return runtime

}