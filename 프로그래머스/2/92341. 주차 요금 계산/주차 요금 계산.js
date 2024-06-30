function solution(fees, records) {
    var answer = [];
    
    const [defaultTime, defaultFee, timePer, feePerTime] = fees;
    const recordsMap = new Map();
    const carList = new Set();
    
    for (const r of records) {
        const [time, car, type] = r.split(' ');
        const [hour,minute] = time.split(':');
        
        carList.add(car)
        const record = {
            type: type,
            time: hour*60 + parseInt(minute)
        };
        const arr = recordsMap.get(car);
        if(arr) {
            recordsMap.set(car, [...arr, record])
            
        } else {
            recordsMap.set(car, [record])
        }
    }
    
    return [...carList].sort((a,b)=> a-b).map(car=> {
        const car_records = recordsMap.get(car).reverse();
        let useTime = 0;
        let result = 0;
        if(car_records[0].type !== 'OUT') {
            car_records.unshift({type:'OUT', time: 1439})
        } 
        
        for(let i=0;i<car_records.length;i+=2) {
            useTime += car_records[i].time - car_records[i+1].time
        }
        
        // 요금 결제
        if(useTime <= defaultTime) 
            result += defaultFee;
        else if(useTime > defaultTime) 
            result += defaultFee + Math.ceil((useTime-defaultTime) / timePer) * feePerTime;
        return result
    })
}