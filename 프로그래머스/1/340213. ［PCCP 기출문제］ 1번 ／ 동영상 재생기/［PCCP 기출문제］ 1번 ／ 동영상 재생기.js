function solution(video_len, pos, op_start, op_end, commands) {
    
    let current = pos;
    commands.forEach(command => {
        
        current = processCommands(command, current, video_len, op_start, op_end)  
    })  
    
    return current
}

const processCommands = (type, current,video_len, op_start, op_end) => {
    
    let result = null
    
    const currentTimestamp = getTimestamp(current) 
    const opStartTimestamp = getTimestamp(op_start)
    const opEndTimestamp = getTimestamp(op_end)
    if(currentTimestamp >=  opStartTimestamp && opEndTimestamp >= currentTimestamp) {
        current = op_end
    }  
    
    switch(type) {
        case 'prev': 
            result = moveToPrev(current)
            break;
        case 'next':
            result = moveToNext(current,video_len)
            break;
    }
    
    const nextTimestamp = getTimestamp(result)
    
    if(nextTimestamp >=  opStartTimestamp && opEndTimestamp >= nextTimestamp) {
        return op_end
    } else {
        return result
    }
}

const moveToPrev = (currentPos) => { 
    const timestamp = getTimestamp(currentPos) 
    
    if(timestamp - 10 > 0) {
        const newMin =  Math.floor((timestamp - 10) / 60 );
        const newSec = (timestamp - 10) - newMin * 60
        return `${newMin.toString().padStart(2,'0')}:${newSec.toString().padStart(2,'0')}`;
    } else {
        return "00:00"
    }
}

const moveToNext = (currentPos, max) => { 
    const timestamp = getTimestamp(currentPos) 
    const endTimestamp = getTimestamp(max);
    
    if(timestamp + 10 < endTimestamp) {
        const newMin =  Math.floor((timestamp + 10) / 60);
        const newSec = (timestamp + 10) - newMin * 60
        return `${newMin.toString().padStart(2,'0')}:${newSec.toString().padStart(2,'0')}`;
    } else {
        return max
    }
}

const getTimestamp = (time) => {
    const [min, sec] = time.split(':').map(Number);
    return min * 60 + sec
}