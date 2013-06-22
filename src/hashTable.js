var HashTable = function(){
  this._limit = 4;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  this._storage = [];
  this._storageLength = 0;
};

HashTable.prototype.insert = function(key, val){
  var index = this.hash(key, this._limit);
  // if not an array then make make index 0 = [key, val] and stop
  if (!this._storage[index]) {this._storage[index] = [[key, val]]; return;}
  // check array for value
  var setIndex = _.map(this._storage[index], function(value, arrIndex, collection){
    if (collection[arrIndex][0] === key) {return arrIndex;}
  })[0];// map returns an array so this will take the value from that array
  if (setIndex === []) {this._storage[index].push([key, val]);}
  else {this._storage[index][setIndex][1] = val;}
  };

  HashTable.prototype.retrieve = function(){
  };

  HashTable.prototype.remove = function(){
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
