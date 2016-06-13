# Leetcode Notes

- [Binary Tree Post Order Traversal](#binary-tree-post-order-traversal)


#### Binary Tree Post Order Traversal

- Put right subtree into stack and remove right link
- Put left subtree into stack and remove left link
- if the first element of stack has no link to left and right subtree, then pop
