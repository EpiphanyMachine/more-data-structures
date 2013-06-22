var makeLinkedList = function(){
  var newLinkedList = {};

  newLinkedList.addToTail = function(value){
    if (value === undefined) {return;} // check if a value is being passing in
    if (!this._tail) { // check if there are any nodes, create first node
      this._head = this._tail = makeNode(value);
    } else { // add to tail, set links
    this._tail.next = makeNode(value);
    this._tail.next.previous = this._tail;
    this._tail.next = this._tail;
    }
  };

  newLinkedList.addToHead = function(value){
    if (value === undefined) {return;} // check if a value is being passing in
    if (!this._tail) { // check if there are any nodes, create first node
      this._head = this._tail = makeNode(value);
    } else { // add to head
      this._head.previous = makeNode(value);
      this._head.previous.next = this._head;
      this._head = this._head.previous;
    }
  };

  newLinkedList.removeHead = function(){
    // if no head return undefined
    if (this._head === undefined) {return;}
    // delete, return head, set
    var tempval = this._head.value;
    if (this._head.next) {
      this._head.next.previous = null;
      this._head = this._head.next;
    }
    else {delete this._tail; delete this._head;}
    return tempval;
  };

  newLinkedList.removeTail = function(){
    // if no tail return undefined
    if (this._tail === undefined) {return;}
    // delete and return tail
    var tempval = this._tail.value;
    if (this._tail.previous) {
      this._tail.previous.next = null;
      this._tail = this._tail.previous;
    }
    else {delete this._head; delete this._tail;}
    return tempval;
  };

  newLinkedList.contains = function(val, node){
    node = node || this._head;
    return (node.value === val) || (node.next ? this.contains(val, node.next) : false);
  };

  return newLinkedList;
};

var makeNode = function(val){
  var newNode = {
    value: val,
    next: null,
    previous: null
  };

  newNode.removeNextNode = function(){
  };

  return newNode;
};