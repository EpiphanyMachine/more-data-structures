var makeSet = function(){
  var set = Object.create(setPrototype); // fix me
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(val){
  this._storage[JSON.stringify(val)] = '';
};

setPrototype.contains = function(val){
  return this._storage.hasOwnProperty(JSON.stringify(val));
};

setPrototype.remove = function(val){
  delete this._storage[JSON.stringify(val)];
};
