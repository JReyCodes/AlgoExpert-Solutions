/*
NOTES ABOUT THIS ALGO 

COMPLETION TIME: 8 Mins 
SOLVED ON: 12/26


Used a fast and a slow pointer to naviagate through and find out when we hit the end of our linked list. 

The slow pointer moves 1 time for every 2 times the fast one moves so that way we know we hit the halfway point. 

This solves the algo in O(n) time and O(1) space so the solution is Optimal.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

You're given a Linked List with at least one node. Write a function
that returns the middle node of the Linked List. If there are two middle
nodes (i.e. an even length list), your function should return the second
of these nodes.

Sample Input 
LinkedList = 2 -> 7 -> 3 -> 5

Sample output
3 -> 5 
The middle could be 7 or 3, we return the second middle node
*/ 

// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  exports.LinkedList = LinkedList;

  function middleNode(linkedList) {
    let fast = linkedList
    let slow = linkedList
    let alternate = false 
    while(fast){
      fast = fast.next
      if(!alternate){
        alternate = true
      } else {
        alternate = false
        slow = slow.next
      }
    }
    return slow
  }
  
  exports.middleNode = middleNode;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

