var BinarySearchTree = function(val){
  this.value = val;
  this.depth = 0;
};

BinarySearchTree.prototype.insert = function(val){
  if (this.value === val) {return;}
  if (val < this.value && !this.left) {this.left = new BinarySearchTree(val); this.left.parent = this;}
  if (val < this.value && this.left) {this.left.insert(val); this.depth++;}
  if (val > this.value && !this.right) {this.right = new BinarySearchTree(val); this.right.parent = this;}
  if (val > this.value && this.right) {this.right.insert(val); this.depth++}
};

BinarySearchTree.prototype.contains = function(val){
  if (this.value === val) {return true;}
  if (val < this.value && !this.left) {return false;}
  if (val < this.value && this.left) {return this.left.contains(val);}
  if (val > this.value && !this.right) {return false;}
  if (val > this.value && this.right) {return this.right.contains(val);}
};

BinarySearchTree.prototype.depthFirstLog = function(func){
  // calls func on each value in a tree depth first
  func.call(this.value);
  this.left && this.left.depthFirstLog(func);
  this.right && this.right.depthFirstLog(func);
};

BinarySearchTree.prototype.breadthFirstLog = function(func, kids){
  kids = kids || this;
  _.each(kids, function(val){
    func.call(val);
  });
  var gkids = [];
  _.each(kids, function(val){
    if (val.left) {gkids.push(val.left);}
    if (val.right) {gkids.push(val.right);}
  });
  _.invoke(gkids, 'breadthFirstLog', [func, gkids]);
};
