const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./서정우/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, s] = input[0].split(" ").map(Number);

const times = input.slice(2).map(Number);

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(item) {
    this.heap.push(item);
    this._bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) return null;
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this._bubbleDown(0);
    }
    return min;
  }

  _bubbleUp(idx) {
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.heap[parentIdx];
      const current = this.heap[idx];

      // 시간이 같으면 person이 작은 것을 우선
      if (
        parent.time < current.time ||
        (parent.time === current.time && parent.person <= current.person)
      ) {
        break;
      }
      [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
      idx = parentIdx;
    }
  }

  _bubbleDown(idx) {
    while (true) {
      let smallest = idx;
      const leftIdx = 2 * idx + 1;
      const rightIdx = 2 * idx + 2;

      if (leftIdx < this.heap.length) {
        const left = this.heap[leftIdx];
        const smallestNode = this.heap[smallest];
        if (
          left.time < smallestNode.time ||
          (left.time === smallestNode.time && left.person < smallestNode.person)
        ) {
          smallest = leftIdx;
        }
      }
      if (rightIdx < this.heap.length) {
        const right = this.heap[rightIdx];
        const smallestNode = this.heap[smallest];
        if (
          right.time < smallestNode.time ||
          (right.time === smallestNode.time && right.person < smallestNode.person)
        ) {
          smallest = rightIdx;
        }
      }
      if (smallest === idx) break;

      [this.heap[smallest], this.heap[idx]] = [this.heap[idx], this.heap[smallest]];
      idx = smallest;
    }
  }
}
const pq = new MinHeap();

// 초기화: 모든 사람이 시간 0에 준비됨
for (let i = 1; i <= times.length; i++) {
  pq.push({ time: 0, person: i });
}

// n-s개의 소보루를 처리
const eaten = n - s;
let lastPerson = -1;

for (let i = 0; i < eaten; i++) {
  const { time, person } = pq.pop();
  lastPerson = person;

  // 이 사람의 다음 시간 계산
  const nextTime = time + times[person - 1]; // times[person-1]은 먹는 시간
  pq.push({ time: nextTime, person: person });
}

console.log(lastPerson);
