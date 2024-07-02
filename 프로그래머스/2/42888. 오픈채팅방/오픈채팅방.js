function solution(record) {
    const result = [];
    const enter = (uid) => `${uid}님이 들어왔습니다.`
    const leave = (uid) => `${uid}님이 나갔습니다.`
    const userList = new Map();
    
    // record parsing
    record.forEach(r=> {
        const [type,uid,name] = r.split(' ');
        
        switch(type) {
            case 'Enter':
                result.push(`${type} ${uid}`);
                userList.set(uid,name);
                break;
            case 'Leave':
                result.push(`${type} ${uid}`);
                break;
            case 'Change':
                userList.set(uid,name);
                break;
        }
    })
    
    return result.map(line=> {
        const [type, uid] = line.split(' ');
        if(type==='Enter') {
            return enter(userList.get(uid))
        } else {
            return leave(userList.get(uid))
        }
    });
}


