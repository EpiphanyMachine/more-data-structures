var makeLinkedList = function(value){
  var newLinkedList = {};
  if (value) {newLinkedList.addToTail(value);}

  newLinkedList.addToTail = function(value){
    if (!value) {return;} // check if a value is being passing in
    if (!this._tail) { // check if there are any nodes, create first node
      this._head = this._tail = makeNode(value);
    } else { // add to tail, set links
    this._tail.next = makeNode(value);
    this._tail.next.previous = this._tail;
    this._tail = this._tail.next;
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
    if (this._head === undefined) {return;} // if no head return undefined
    var tempval = this._head;
    if (!this._head.next) { // this is the last item in the list
      delete this._tail;
      delete this._head;
    } else { // remove the head only
      this._head.next.previous = null;
      this._head = this._head.next;
    }
    return tempval.value;
  };

  newLinkedList.removeTail = function(){
    if (this._tail === undefined) {return;} // if no tail return undefined
    var tempval = this._tail;
    if (!this._tail.previous) { // this is the last element
      delete this._head;
      delete this._tail;
    } else {
      this._tail.previous.next = null;
      this._tail = this._tail.previous;
    }
    return tempval.value;
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