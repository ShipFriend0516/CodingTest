const fs = require("fs");
const input = fs.readFileSync("../dev/stdin").toString().trim();

const solution = (input) => {
  const lines = input.split("\n").map((el) => Number(el.trim()));

  const heap = [];
  const answer = [];
  const swap = (a, b) => {
    [heap[a], heap[b]] = [heap[b], heap[a]];
  };

  const heapifyDown = () => {
    // 루트 노드에서 아래로 내려가면서 heapify
    let currentIndex = 0;
    const length = heap.length;
    for (let i = 0; i < Math.floor(heap.length - 1 / 2); i++) {
      const leftIdx = currentIndex * 2 + 1;
      const rightIdx = currentIndex * 2 + 2;
      let smallestIdx = currentIndex;
      // 왼쪽 자식이 있고 현재 노드보다 작은 경우
      if (leftIdx < length && heap[leftIdx] < heap[smallestIdx]) {
        smallestIdx = leftIdx;
      }

      // 오른쪽 자식이 있고 현재까지의 최소값보다 작은 경우
      if (rightIdx < length && heap[rightIdx] < heap[smallestIdx]) {
        smallestIdx = rightIdx;
      }

      // 현재 노드가 가장 작으면 교환 중단
      if (smallestIdx === currentIndex) {
        break;
      }

      swap(currentIndex, smallestIdx);
      currentIndex = smallestIdx;
    }
  };

  const heapifyUp = (number) => {
    // 노드 삽입 연산
    heap.push(number);
    // Heapify N 삽입
    let currentIndex = heap.length - 1;
    for (
      let level = Math.floor((currentIndex - 1) / 2) + 1;
      level > 0;
      level--
    ) {
      const parentNodeIndex = Math.floor((currentIndex - 1) / 2);

      if (heap[currentIndex] < heap[parentNodeIndex]) {
        // 부모 노드와 비교
        swap(currentIndex, parentNodeIndex);
        currentIndex = parentNodeIndex;
      } else {
        break;
      }
    }
  };

  for (let i = 1; i <= lines[0]; i++) {
    const N = lines[i];
    if (N === 0) {
      // 최솟값 출력

      if (heap.length === 0) {
        answer.push(0);
        continue;
      }
      if (heap.length === 1) {
        answer.push(heap.pop());
        continue;
      }
      answer.push(heap[0]);
      heap[0] = heap.pop();
      heapifyDown();
    } else {
      heapifyUp(N);
    }
  }

  console.log(answer.join("\n"));
};

solution(input);
