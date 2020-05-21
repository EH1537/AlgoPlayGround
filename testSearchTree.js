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

let tester = new TreeNode(5)
tester.add(2)
tester.add(4)
tester.add(6)
console.log(tester) 
// tester.left = new TreeNode(3)
// tester.right = new TreeNode(3)
// tester.left.left = new TreeNode(4)
// tester.right.right = new TreeNode(4)
// tester.left.right = new TreeNode(1)
// tester.right.left = new TreeNode(1)



var isSame = function (le, ri) {
    //base case, if the end of the tree are both null, return up the tree with a value of true
    if (!le && !ri) return true;
    //another base case, if left  or right are null and teh other isnt, or if left and right values do not line up
    if (!le || !ri || ri.val !== le.val) return false;
    //check to see if each side of the tree is equal but mirrored (hence symetrical)
    return isSame(le.left, ri.right) && isSame(le.right, ri.left); 
};
var isSymmetric = function(root) {
    if (!root) return true; //edge case handing, treating a bad root as symmetrical
    return isSame(root.left, root.right);
};

console.log(isSymmetric(tester))







