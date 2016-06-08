export default function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

TreeNode.prototype.insert = function(val) {
  let queue = [this];
  while (queue.length) {
    let node = queue.shift();
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
};

TreeNode.prototype.bfs = function() {
  let queue = [this];
  let output = [];
  while (queue.length) {
    let node = queue.shift();
    output.push(node.val);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return output;
};

if (require.main === module) {
  let start = 0;
  let end = 10;
  let node = new TreeNode(start);
  Array
    .from(new Array(end), (x, i) => i + 1)
    .forEach((x) => {
      node.insert(x);
    });
  console.log(`insert sequentially from ${start} to ${end}`);
  console.log(node);
  console.log('');

  let node2 = (new TreeNode(11)).insert(12).insert(13);
  console.log('chainable insertion test');
  console.log(node2);
  console.log('');

  console.log('bfs test');
  console.log(node.bfs());
  console.log('');
}
