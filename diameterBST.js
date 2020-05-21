/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let heightHelp = (node) => {
    if (!node) {
      return 0
    }
    return 1 + Math.max(heightHelp(node.left), heightHelp(node.right))
  }
  if (!root) {
    return 0;
  }

  let lHt = heightHelp(root.left)
  let rHT = heightHelp(root.right)

  let lDiam = diameterOfBinaryTree(root.left)
  let rDiam = diameterOfBinaryTree(root.right)

  return Math.max(lHt + rHT, Math.max(lDiam, rDiam))
};



