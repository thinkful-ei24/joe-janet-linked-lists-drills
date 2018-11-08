class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(value) {
   return this.head = new _Node(value, this.head);
  }

  insertLast(value) {
    if(this.head === null) {
      this.insertFirst(value);
    } else {
      let currentNode = this.head; //102
      while(currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      return currentNode.next = new _Node(value, null);
    }
  }

  removeFirst() {
    if(this.head === null) {
      throw new Error('No nothin');
    }
    this.head = this.head.next;
    return;
  }

  remove(value) {
    if(this.head === null) {
      throw new Error('No nothin');
    }
    let nodeBefore;
    let currentNode = this.head;
    let nodeAfter;
    while(currentNode.value !== value) {
      nodeBefore = currentNode;
      currentNode = currentNode.next;
      nodeAfter = currentNode.next;
    }
    if(currentNode === null) {
      console.log('not found');
    }
    nodeBefore.next = nodeAfter;
    return;
  }

  removeLast() {
    if(this.head === null) {
      throw new Error('No nothin');
    }
    let nodeBefore;
    let currentNode = this.head; //102
    while(currentNode.next !== null) {
      nodeBefore = currentNode;
      currentNode = currentNode.next;
    }
    nodeBefore.next = null;
    return;
  }

  find(value) {
    if(this.head === null) {
      throw new Error('No nothin');
    }
    let currentNode = this.head;
    while(currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    if(currentNode === null) {
      console.log('not found');
    }
    return currentNode;
  }
}

class _Node {
  constructor(value, next) {
    this.value = value; //'Im a value'
    this.next = next; //This is pointer
  }
}

const ourLinkList = new LinkedList();

ourLinkList.insertFirst('Janet');
console.log(ourLinkList);