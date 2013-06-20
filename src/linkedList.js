var makeLinkedList = function(){
  var newLinkedList = {};

  newLinkedList.addToTail = function(value){
    if (value === undefined) {return;}
    if (this._tail === undefined) {
      this._tail = makeNode(value);
      this._head = this._tail;
    } else {
      this._tail.next = makeNode(value);
      this._tail = this._tail.next;
    }
  };

  newLinkedList.removeHead = function(){
    if (this._head === undefined) {
      return; // if no head return undefined
    }
    var tempval = this._head.value;
    //debugger;
    if (this._head.next) {this._head = this._head.next;}
    else {delete this._tail; delete this._head;}
    return tempval;
  };

  newLinkedList.contains = function(val, node){
    node = node || this._head;
    return (node.value === val) || (node.next ? this.contains(val, node.next) : false);
  };

  return newLinkedList;
};

var makeNode = function(value){
  var newNode = {};
  newNode.value = value;
  newNode.next = null;

  newNode.removeNextNode = function(){
  };

  return newNode;
};