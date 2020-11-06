class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority)
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIdx = Math.floor((index - 1)/2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) 
        break;
      
      this.values[parentIdx] = element;
      this.values[index] = parent;
      index = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return min;
  }

  bubbleDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while(true) {
      let leftChildIndex = 2 * idx + 1;
      let rightChildIndex = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];

        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];

        if ((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

const hospital = new PriorityQueue();
hospital.enqueue('Common cold', 5);
hospital.enqueue('Gunshot wound', 1);
hospital.enqueue('High fever', 4);
hospital.enqueue('Broken arm', 2);
hospital.enqueue('Glass in foot', 3);
console.log(hospital.values);