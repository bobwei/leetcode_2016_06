# Leetcode Notes

- [Intersection of Two Arrays](#intersection-of-two-arrays) ( date: 2016/06/15 )
- [Restore IP Addresses](#restore-ip-addresses) ( date: 2016/06/14 )
- [Majority Element](#majority-element) ( date: 2016/06/13 )
- [Binary Tree Post Order Traversal](#binary-tree-post-order-traversal) ( date: 2016/06/12 )


#### Intersection of Two Arrays

###### date: 2016/06/15

- Use hash


#### Restore IP Addresses

###### date: 2016/06/14

- Use three indexes ( i, j, k ) to split the string into four ip numbers
- Validate each sliced number
- Add break out condition to skip out impossible combinations


#### Majority Element

###### date: 2016/06/13

- e ( Majority Element )
- If we cancel out the occurrence of e with non majority element, then it will exist till the end if e is a majority element


#### Binary Tree Post Order Traversal

###### date: 2016/06/12

- Put right subtree into stack and remove right link
- Put left subtree into stack and remove left link
- If the first element of stack has no link to left and right subtree, then pop
