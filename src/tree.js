var makeTree = function(val){
  var newTree = {};
  newTree.value = val;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};
treeMethods.addChild = function(val, node){
  node = node || this;
  node.children[node.children.length] = this.makeNode(val);
  return node.children[node.children.length - 1];
};

treeMethods.contains = function(val, node){
  node = node || this;
  return _.contains(node, val) || _.some(node.children, _.contains(val));
};

treeMethods.makeNode = function(value){
  return {
  'value': value,
  'children': []
  };
};
