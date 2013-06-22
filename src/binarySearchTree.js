var BinarySearchTree = function(val){
  this.value = val;
};

BinarySearchTree.prototype.insert = function(val){
  if (this.value === val) {return;}
  if (val < this.value && !this.left) {this.left = new BinarySearchTree(val); this.left.parent = this;}
  if (val < this.value && this.left) {this.left.insert(val);}
  if (val > this.value && !this.right) {this.right = new BinarySearchTree(val); this.right.parent = this;}
  if (val > this.value && this.right) {this.right.insert(val);}
};

BinarySearchTree.prototype.contains = function(val){
  if (this.value === val) {return true;}
  if (val < this.value && this.left === undefined) {return false;}
  if (val < this.value && this.left !== undefined) {return this.left.contains(val);}
  if (val > this.value && this.right === undefined) {return false;}
  if (val > this.value && this.right !== undefined) {return this.right.contains(val);}
};

BinarySearchTree.prototype.depthFirstLog = function(func){
  // calls func on each value in a tree depth first
  func.call(this.value);
  this.left && this.left.depthFirstLog(func);
  this.right && this.right.depthFirstLog(func);
};

BinarySearchTree.prototype.breadthFirstLog = function(func){
  //
};
