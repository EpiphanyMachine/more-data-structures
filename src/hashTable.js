var HashTable = function(){
  this._limit = 4;
  this._storage = [];
  this._storageLength = 0;
  this._auditStorage = function(){
    //if (this._storageLength / this._limit > .75) {;}
  };
};

HashTable.prototype.insert = function(key, val){
  var index = this.hash(key, this._limit);
  // if index is undefined then make make index 0 = [key, val] and stop
  if (!this._storage[index]) {this._storage[index] = [[key, val]]; this._storageLength++; this._auditStorage(); return;}
  // check array for value
  var setIndex = _.map(this._storage[index], function(value, arrIndex, collection){
    if (collection[arrIndex][0] === key) {return arrIndex;}
  })[0];// map returns an array so this will take the value from that array
  if (setIndex === [] || setIndex === undefined) {this._storage[index].push([key, val]);}
  else {this._storage[index][setIndex][1] = val;}
  };

  HashTable.prototype.retrieve = function(key){
  var index = this.hash(key, this._limit);
  // if index is undefined return undefined
  if (!this._storage[index]){return;}
  // check array for value
  var setIndex = false;
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === key){setIndex = i;}
  }
  if (setIndex === false) {return;}
  return this._storage[index][setIndex][1];
  };

  HashTable.prototype.remove = function(key){
  var index = this.hash(key, this._limit);
  // if index is undefined return undefined
  if (!this._storage[index]){return;}
  // check array for value
  var setIndex = false;
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === key){setIndex = i;}
  }
  if (setIndex === false) {return;}
  var tempval = this._storage[index].splice(setIndex,1);
  if (this._storage[index][0] === undefined) {this._storageLength--; this._auditStorage();}
  //delete this._storage[index][setIndex];
  return tempval[0][1];
  };

  HashTable.prototype.hash = function(str, max){
  // returns an integer hash between 0 and max for a string
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = (hash<<5) + hash + str.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
    return hash % max;
  };
