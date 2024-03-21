function solution(id_list, report, k) {
    let reportCount = {}
    let banList = []
    id_list.forEach(id=> {
        reportCount[id] = new Set();
    })
    
    report.forEach(report=> {
        let reporter = report.split(' ')[0]
        let reported = report.split(' ')[1]
        reportCount[reported].add(reporter);
    })
    
    for(let reported in reportCount) {
        if(reportCount[reported].size >= k) {
            banList.push(reported)
        }
    }
    
    let mailedUser = {}
    id_list.forEach(id=> {
        mailedUser[id] = 0;
    })
    
    banList.forEach(ban=> {
        reportCount[ban].forEach(user=> {
            mailedUser[user]++;
        })
    })
    
    return Object.values(mailedUser)
}
