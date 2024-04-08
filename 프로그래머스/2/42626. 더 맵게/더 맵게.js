class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1)
    }
    
    extractMin() {
        let min = 0;
        if(this.heap.length !== 1) {
            min = this.heap[0];
            this.heap[0] = this.heap.pop()
            this.heapifyDown(0) 
        } else {
            min = this.heap.pop()
        }
        return min;
    }
    
    heapifyDown(index) {
        // index == 시작 인덱스이자 부모 인덱스
        const left = index * 2 + 1;
        const right = index * 2 + 2;
        // 일단 가장 작아야하는게 index이므로,
        let smallest = index;
        
        if(left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
        
        if(right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }
        
        if(smallest!==index) {
            this.swap(index,smallest)
            this.heapifyDown(smallest);
        }
    }
    
    heapifyUp(index) {
        // index를 기준으로 상위 레벨의 heap을 점검
        const parent = Math.floor((index-1)/2) 
        
        if(parent >= 0 && this.heap[parent] > this.heap[index]) {
            this.swap(index,parent)
            this.heapifyUp(parent)
        }
    }
    
    swap(a,b) {
       [this.heap[a],this.heap[b]] = [this.heap[b],this.heap[a]]
    }
    
    checkMin() {
        return this.heap[0]
    }
    
    size() {
        return this.heap.length;
    }
}

function solution(scoville, K) {
    const heap = new MinHeap();
    let answer = 0;
    
    scoville.forEach(s=> {
        heap.insert(s)
    })
    
    while(heap.checkMin() < K) {
        if(heap.size() < 2) {
            return -1
        } 
        
        let low = heap.extractMin();
        let high = heap.extractMin();

        heap.insert(mix(low,high))
        answer++;
        
    
    }
    
 
    return answer;
}

function mix(low, high) {
    return low + (high * 2);
}