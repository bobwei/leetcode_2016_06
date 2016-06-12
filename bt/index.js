export default class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }

  insert(val) {
    const queue = [this];
    while (queue.length) {
      const node = queue.shift();
      if (!node.left) {
        node.left = new TreeNode(val);
        break;
      } else if (!node.right) {
        node.right = new TreeNode(val);
        break;
      } else {
        queue.push(node.left, node.right);
      }
    }
    return this;
  }

  static fromBFS(arr) {
    const rootNode = new TreeNode(arr.shift());
    return arr
      .reduce(
        (prev, current) => prev.insert(current),
        rootNode
      );
  }

  bfs() {
    const queue = [this];
    const output = [];
    while (queue.length) {
      const node = queue.shift();
      output.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return output;
  }

  inOrder() {
    const stack = [];
    const output = [];
    let current = this;
    while (current || stack.length) {
      if (current) {
        stack.push(current);
        current = current.left;
      } else {
        current = stack.pop();
        output.push(current.val);
        current = current.right;
      }
    }
    return output;
  }
}

if (require.main === module) {
  const start = 0;
  const end = 10;
  const rootNode = Array
    // create [start + 1, ...end], i.e., [1, ...10]
    .from(new Array(end), (x, i) => i + 1)
    // chainable node => return root node
    .reduce(
      (prev, current) => prev.insert(current),
      new TreeNode(start)
    );
  console.log(rootNode.bfs());
  console.log(rootNode.inOrder());
  console.log(TreeNode.fromBFS(rootNode.bfs()).bfs());
}
