class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let oldFirst = this.first;
      this.first = newNode;
      this.first.next = oldFirst;
    }

    return ++this.size;
  }

  pop() {
    if (!this.first)
      return null;

    let poppedNode = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = poppedNode.next;
    }
    poppedNode.next = null;
    this.size--;
    return poppedNode.value;
  }
}