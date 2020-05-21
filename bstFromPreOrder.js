function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function printPreOrder (root) {
  console.log(root.val);
  if (root.left) {
    printPreOrder(root.left)
  }
    if (root.right) {
    printPreOrder(root.right)
  }
  return
}

var bstFromPreorder = function (preorder) {

  let root = new TreeNode(preorder[0])

  let addNode = (value, current) => {
    if (value > current.val && current.right == null) {
      current.right = new TreeNode(value);
    }
    else if (value < current.val && current.left == null) {
      current.left = new TreeNode(value);
    }
    else if (value > current.val) {
      addNode(value, current.right)
    }
    else if (value < current.val) {
      addNode(value, current.left)
    }
    return
  }

  for (let i = 1; i < preorder.length; i++) {
    addNode(preorder[i], root)
  }

  return root
};

let testingBST = bstFromPreorder([8,5,1,7,10,12])

printPreOrder(testingBST)