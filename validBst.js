/*

Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.


*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}


TreeNode.prototype.add = function (value) {
  if (value > this.val && this.right == null) {
    this.right = new TreeNode(value);
  }
  else if (value < this.val && this.left == null) {
    this.left = new TreeNode(value);
  }
  else if (value > this.val) {
    this.right.add(value)
  }
  else if (value < this.val) {
    this.left.add(value)
  }
  return
}

let tester = new TreeNode(1)
tester.add(1)
tester.add(3)
tester.add(4)
tester.add(6)
tester.add(8)

let falseTester = new TreeNode(10)
falseTester.left = new TreeNode(5)
falseTester.right = new TreeNode(15)
falseTester.right.left = new TreeNode(6)
falseTester.right.right = new TreeNode(6)


var isValidBST = function (root) {
  if (root == null) {
    return null
  }
  return checker(root, null, null)
};

function checker (root, lower, upper) {
  if (root == null) {
    return true
  }
  if (lower != null) {
    if (root.val >= lower) {
      return false
    }
  }
  if (upper != null) {
    if (root.val <= upper) {
      return false
    }
  }
  return (checker(root.left, root.val, upper) && checker(root.right, lower, root.val))
}

console.log(falseTester)
console.log(isValidBST(falseTester))