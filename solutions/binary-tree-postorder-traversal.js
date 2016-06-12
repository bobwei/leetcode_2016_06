import TreeNode from '../bt';

const postorderTraversal = function (rootNode) {
  if (!rootNode) {
    return [];
  }
  const stack = [rootNode];
  const output = [];
  while (stack.length) {
    const last = stack.slice(-1)[0];
    if (!last.left && !last.right) {
      output.push(stack.pop().val);
    }
    if (last.right) {
      stack.push(last.right);
      last.right = null;
    }
    if (last.left) {
      stack.push(last.left);
      last.left = null;
    }
  }
  return output;
};

const rootNode = TreeNode.fromBFS([1, null, 2, 3]);
console.log(rootNode.bfs(), rootNode.inOrder(), postorderTraversal(rootNode));
