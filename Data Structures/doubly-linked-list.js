class Node {
  constructor(val) {
    this.prev = null;
    this.next = null;
    this.val = val;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;

    this.length++;
    return this;
  }

  pop() {
    if (!this.tail)
      return undefined;
    
    let lastItem = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = lastItem.prev;
      this.tail.next = null;
      lastItem.prev = null;
    }
    this.length -= 1;

    return lastItem;
  }

  shift() {
    if (!this.head)
      return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length -=1;

    return oldHead;
  }

  unshift(val) {
    let newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      this.head.prev = newHead;
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length)
      return null;
    
    let half = Math.floor(this.length / 2);
    let current;
    if (index <= half) {
      current = this.head;
      for (let i = 0; i <= half; i++) {
        if (index === i)
          break;
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > half; i--) {
        if (index === i)
          break;
        current = current.prev;
      }
    }
    return current;
  }

  set(index, val) {
    let findNode = this.get(index);
    if (findNode) {
      findNode.val = val;
      return true;
    }
    
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length)
      return false;
    
    if (index === 0)
      return !!this.unshift(val);
    if (index === this.length)
      return !!this.push(val);

    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;

    newNode.prev = prevNode;
    newNode.next = nextNode;
    prevNode.next = newNode;
    nextNode.prev = newNode;

    this.length += 1;
    return true;    
  }

  remove(index) {
    if (index < 0 || index >= this.length)
      return undefined;

    if (index === 0)
      return this.shift();
    if (index === this.length - 1)
      return this.pop();
  
    let removedNode = this.get(index);
    let prevNode = removedNode.prev;
    let nextNode = removedNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    removedNode.prev = null;
    removedNode.next = null;

    this.length -= 1;
    return removedNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for(let i = 0; i < this.length; i++) {
      next = node.next;
      node.prev = next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}