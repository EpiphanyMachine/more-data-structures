var makeTree = function(val){
  var newTree = {
    value: val,
    children: [],
    parent: null
  };
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};
treeMethods.addChild = function(val){
  this.children[this.children.length] = makeTree(val);
  this.children[this.children.length - 1].parent = this;
  return this.children[this.children.length - 1];
};

treeMethods.contains = function(val){
  // returns true if and node equals val
  return this.value === val || _.any(_.invoke(this.children, 'contains', val));
};

treeMethods.traverse = function(func){
  // calls func on each value in a tree
  func.call(this.value);
  _.invoke(this.children, 'traverse', func);
};

treeMethods.removeFromParent = function(){
  // find and remove link to child in parent
  var newTree = this; // this changes in the each function so use a temp var
  _.each(this.parent.children, function(child, index, children){
    if(newTree === child) {children.splice(index, 1);}
  });
  // remove link to parent and return new tree
  this.parent = null;
  return newTree;
};

//****************************************************************
// If I were to rewrite this from scratch I would use a doubly
// linkedList for the children.  This not the children array to
// be shuffled after something is removed from its parent.
// You already have the link to the item being removed (this)
// so it would be efficient.
//
// Because of a time constraint I will splice the children.
//
//****************************************************************
