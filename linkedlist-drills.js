/* eslint-disable no-unused-vars */
const LL = require('./linkedlist');

function reverseList (list){

  //input: 1,2,3,4,5
  // output: 5,4,3,2,1
  // The head of the list needs to point null
  // The node that is currently pointing to null needs to point to the it's previous item
  //The previous ite before null needs to point to its previous item and so forth

  let previous = null;
  let current= list.head;


  while(current !== null){
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  list.head = previous;

  return list;
}

const ourList = new LL();
ourList.insertFirst(1);
ourList.insertLast(2);
ourList.insertLast(3);
ourList.insertLast(4);
ourList.insertLast(5);


// console.log(reverseList(ourList).prettyPrint());

function thirdFromLast(lst) {
  let current = lst.head;
  let counter = 0;


  while(current !== null) {
    current = current.next;
    counter++;
  }
  counter -= 4;
  let i = 0;
  current = lst.head;
  while(i !== counter) {
    current = current.next;
    i++
  }

  return current;
}

// console.log(thirdFromLast(ourList));