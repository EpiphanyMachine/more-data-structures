var makeTree = function(val){
  var newTree = {
    value: val,
    children: []
  };
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};
treeMethods.addChild = function(val){
  this.children[this.children.length] = makeTree(val);
  return this.children[this.children.length - 1];
};

treeMethods.contains = function(val){
  return this.value === val || _.any(_.invoke(this.children, 'contains', val));
};
