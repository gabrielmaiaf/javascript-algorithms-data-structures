class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newItem = new Node(val);
    if (!this.head) {
      this.head = newItem;
      this.tail = this.head;
    } else {
      this.tail.next = newItem;
      this.tail = newItem;
    }
    
    this.length += 1;
    return this;
  }

  pop() {
    if (this.length === 0)
      return undefined;

    let previousItem = this.head;
    let findTail = previousItem;

    while (previousItem.next) {
      findTail = previousItem;
      previousItem = previousItem.next;
    }

    this.tail = findTail;
    this.tail.next = null;

    this.length -= 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return previousItem;
  }

  shift() {
    if (this.length === 0) return undefined;

    let popHead = this.head;
    this.head = this.head.next;
    this.length -= 1;

    if (this.length === 0)
      this.tail = null;

    return popHead;
  }

  unshift(val) {
    let newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }

    this.length += 1;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length)
      return null;

    let tracker = 0;
    let current = this.head;
    while (tracker !== index) {
      current = current.next;
      tracker++;
    }

    return current;
  }

  set(index, val) {
    let current = this.get(index);

    if (current) {
      current.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length)
      return false;

    if (index === this.length) {
      this.push(val);
    } else if (index === 0) {
      this.unshift(val);
    } else {
      let newNode = new Node(val);
      let prevNode = this.get(index - 1);
      let tempNode = prevNode.next;
      prevNode.next = newNode;
      newNode.next = tempNode;
      this.length += 1;
    }

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length)
      return undefined;
    
    if (index === this.length - 1)
      return this.pop();
    
    if (index === 0)
      return this.shift();
    
    let prevNode = this.get(index - 1);
    let nodeRemoved = prevNode.next;
    prevNode.next = nodeRemoved.next;

    this.length -= 1;
    return nodeRemoved;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for(let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while(current) {
      arr.push(current.val);
      current = current.next;
    }

    return console.log(arr);
  }
}

let list = new SinglyLinkedList();
list.push('hello');
console.log(list);