// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root,sum = 0,result = []) {
    sum += root.value
    if(root.left){
      branchSums(root.left,sum,result)
    }
    if(root.right){
      branchSums(root.right,sum,result)
    }
    if(!root.right && !root.left) result.push(sum)
    console.log(result)
  }
  
const myTree = new BinaryTree(10)
myTree.right =  new BinaryTree(12)
myTree.right.right =  new BinaryTree(13)
myTree.right.left =  new BinaryTree(11)
myTree.left = new BinaryTree(7)
myTree.left.left = new BinaryTree(5)
myTree.left.right = new BinaryTree(9)

branchSums(myTree)




console.log(myTree)