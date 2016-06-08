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

if (require.main === module) {
  let start = 0;
  let end = 10;
  let node = new TreeNode(start);
  Array
    .from(new Array(end), (x, i) => i + 1)
    .forEach((x, i) => {
      node.insert(i);
    });
  console.log(`insert sequentially from ${start} to ${end}`);
  console.log(node);
  console.log('');
  node = (new TreeNode(11)).insert(12).insert(13);
  console.log('chainable insertion test');
  console.log(node);
}
