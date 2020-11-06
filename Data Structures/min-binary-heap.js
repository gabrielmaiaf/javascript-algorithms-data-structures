class MinBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(el) {
    this.values.push(el);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIdx = Math.floor((index - 1)/2);
      let parent = this.values[parentIdx];
      if (element >= parent) 
        break;
      
      this.values[parentIdx] = element;
      this.values[index] = parent;
      index = parentIdx;
    }
  }

  extractMin() {
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

        if (leftChild < element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];

        if ((swap === null && rightChild < element) || (swap !== null && rightChild < leftChild)) {
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
