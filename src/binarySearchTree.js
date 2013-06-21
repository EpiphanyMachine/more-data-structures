var BinarySearchTree = function(val){
  this.value = val;
  this.left = null;
  this.right = null;
  this.parent = null;
};

BinarySearchTree.prototype.insert = function(val){
  if (this.value === val) {return;}
  if (val < this.value && this.left.value === null){this.left = new BinarySearchTree(val); this.left.parent = this;}
  if (val < this.value && this.left.value !== null){this.left.insert(val);}
  if (val > this.value && this.right.value === null){this.right = new BinarySearchTree(val); this.right.parent = this;}
  if (val > this.value && this.right.value !== null){this.right.insert(val);}
};

BinarySearchTree.prototype.contains = function(val){
  return this.value === val || (val < this.value ? this.left.contains(val): this.right.contains(val));
};

BinarySearchTree.prototype.depthFirstLog = function(func){
  // calls func on each value in a tree depth first
  func.call(this.value);
  _.invoke([this.left, this.right], 'depthFirstLog', func);
};

BinarySearchTree.prototype.breadthFirstLog = function(func){
  //
};


// **********************************************
// Regular tree code
// **********************************************


// var treeMethods = {};
// treeMethods.addChild = function(val){
//   this.children[this.children.length] = makeTree(val);
//   this.children[this.children.length - 1].parent = this;
//   return this.children[this.children.length - 1];
// };

// treeMethods.contains = function(val){
//   // returns true if and node equals val
//   return this.value === val || _.any(_.invoke(this.children, 'contains', val));
// };

// treeMethods.traverse = function(func){
//   // calls func on each node in a tree
//   func.call(this);
//   _.invoke(this.children, 'traverse', func);
// };

// treeMethods.removeFromParent = function(){
//   // find and remove link to child in parent
//   var newTree = this; // this changes in the each function so use a temp var
//   _.each(this.parent.children, function(child, index, children){
//     if(newTree === child) {children.splice(index, 1);}
//   });
//   // remove link to parent and return new tree
//   this.parent = null;
//   return newTree;
// };