class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newLeaf = new Node(val);
    if (!this.root) {
      this.root = newLeaf;
      return this;
    }

    let current = this.root;
    while (true) {
      if (val === current.value) return undefined;

      if (val < current.value) {
        if (current.left === null) {
          current.left = newLeaf;
          return this;
        }

        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newLeaf;
          return this;
        }

        current = current.right;
      }
    }
  }

  find(val) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;

    while(current && !found) {
      if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!current) return undefined;
    return current;
  }

  breadthFirstSearch() {
    let data = [];
    let queue = [];
    let node = this.root;

    queue.push(this.root);
    while(queue.length) {
      node = queue.shift();
      data.push(node.value);

      if (node.left)
        queue.push(node.left);

      if (node.right)
        queue.push(node.right)
    }

    return data;
  }
}

let binary = new BinarySearchTree();
binary.insert(10);
binary.insert(15);
binary.insert(20);
binary.insert(6);
binary.insert(3);
binary.insert(8);
console.log(binary.breadthFirstSearch())