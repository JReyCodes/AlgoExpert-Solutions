/*
NOTES ABOUT THIS ALGO 

COMPLETION TIME: 8 mins 
SOLVED ON: 12/26


Recursively went through the branches of the tree and understanding how the recursive call works in each execution context

added a final check after both of the recursive calls happen to check if its a leaf node and if so push the sum at the 

moment to the result array and made a sum and result array as default parameters to the function call 

This solves the algo in O(n) time and O(n) space so the solution is Optimal.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  Write a function that takes in a Binary Tree and returns a list of its branch
  sums ordered from leftmost branch sum to rightmost branch sum.

  A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree
  branch is a path of nodes in a tree that starts at the root node and ends at
  any leaf node.

Sample Input 
TREE = 
           1
        /     \
       2       3
     /   \    /  \
    4     5  6    7
  /   \  /
 8    9 10


Sample output
[15, 16, 18, 10, 11]
*/ 

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
  return result
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;