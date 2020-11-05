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

  depthFirstSearchPreOrder() {
    let data = [];

    function traverse(node) {
      data.push(node.value);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }

  depthFirstSearchPostOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      data.push(node.value);
    }

    traverse(this.root);

    return data;
  }

  depthFirstSearchInOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);

      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(20);
tree.insert(6);
tree.insert(3);
tree.insert(8);
console.log(`DPS Pre Order: ${tree.depthFirstSearchPreOrder()}`)
console.log(`DPS Post Order: ${tree.depthFirstSearchPostOrder()}`)
console.log(`DPS In Order: ${tree.depthFirstSearchInOrder()}`)