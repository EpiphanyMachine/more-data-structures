var makeLinkedList = function(){
  var newLinkedList = {};
  // newLinkedList.head;
  // newLinkedList.tail;

  newLinkedList.addToTail = function(value){
    if (value === undefined) {return;}
    if (this.tail === undefined) {
      this.tail = makeNode(value);
      this.head = this.tail;
    } else {
      this.tail.next = makeNode(value);
      this.tail = this.tail.next;
    }
  };

  newLinkedList.removeHead = function(){
    if (this.head === undefined) {
      return; // if no head return undefined
    }
    var tempval = this.head.value;
    //debugger;
    if (this.head.next) {this.head = this.head.next;}
    else {delete this.tail; delete this.head;}
    return tempval;
  };

  newLinkedList.contains = function(){
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




// var newLinkedList = {};
// newLinkedList.head = null;
// newLinkedList.tail = null;
// newLinkedList.newId = 0; //initial value
// newLinkedList.newNodeName = function(){return JSON.stringify('node' + this.newId);};

// newLinkedList.addToTail = function(value){
//   debugger;
//   if(this.tail === null) {
//     // create a head (which is also the tail because the list contains 1 item)
//     this.+newNodeName() = this.makeNode(value, null);
//     // set as head and tail by id
//     this.tail = this.newNodeName();
//     this.head = this.newNodeName();
//     // make new unique id
//     this.newId ++;
//   } else {
//     // append to the current tail, set current tail as next
//     this.newNodeName() = this.makeNode(value, this.tail);
//     // set node as new tail
//     this.tail = this.newNodeName();
//     // make new unique id
//     this.newId ++;
//   }
// };

// newLinkedList.removeHead = function(){
// };

// newLinkedList.contains = function(){
// };

// newLinkedList.makeNode = function(value, next){
//   var newNode = {
//     'value': value,
//     'next': next
//     };
//   return newNode;
// };

// newLinkedList.removeNextNode = function(){
//   //isnt this the same as removeHead ???
// };

// return newLinkedList;
