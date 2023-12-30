/*
NOTES ABOUT THIS ALGO 

COMPLETION TIME: 15 Mins 
SOLVED ON: 12/26


Taking advantage of the Javascript garbage collection functionality and the fact that the linkedlist is sorted we can

compare the current elements to the one next to it until it is no longer the same by reassiging the current nodes next

to its next's next and at runtime JS will garbage collect those not connected to the LinkedList. 

This solves the algo in O(n) time and O(1) space so the solution is Optimal.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

You're given the head of a Singly Linked List whose nodes are in sorted order
with respect to their values. Write a function that returns a modified version
of the Linked List that doesn't contain any nodes with duplicate values. The
Linked List should be modified in place (i.e., you shouldn't create a brand
new list), and the modified Linked List should still have its nodes sorted
with respect to their values.

Sample Input 
LinkedList = 1 -> 1 -> 3 -> 4 -> 4 -> 4 -> 5 -> 6 -> 6 

Sample output
1 -> 3 -> 4 -> 5 -> 6 
// the head node with value 1
*/ 

// This is an input class. Do not edit.
class LinkedList {
constructor(value) {
    this.value = value;
    this.next = null;
    }
}   

function removeDuplicatesFromLinkedList(linkedList){
let curr = linkedList
while(curr.next){
    if(curr.value === curr.next.value){
    curr.next = curr.next.next
    } else {
    curr = curr.next
    }
}
return linkedList
}