var makeSet = function(){
  var set = Object.create(setPrototype); // fix me
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(val){
  this._storage[val] = '';
};

setPrototype.contains = function(val){
  return this._storage.hasOwnProperty(val);
};

setPrototype.remove = function(val){
  delete this._storage[val];
};
