var HashTable = function(){
  this._limit = 4;
  this._storage = [];
  this._storageLength = 0;
};

HashTable.prototype.insert = function(key, val, auditCheck){
  // if noAudit was passed as argument return false to disable audit check
  auditCheck = !(auditCheck === 'noAudit');
  var index = this.hash(key, this._limit);
  // if index is undefined then make make index 0 = [key, val] and stop
  if (!this._storage[index]) {
    this._storage[index] = [[key, val]]; this._storageLength++;
    // if false insert was called by the method auditStorage()
    // which needs to complete its iterations before the check should be run again
    if(auditCheck) {this._auditStorage();}
    return;
  }
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
  var tempval = this._storage[index].splice(setIndex,1); // this removes the key value array
  // this checks if the removed array was the last in the index, and runs an audit
  if (this._storage[index][0] === undefined) {this._storageLength--; this._auditStorage();}
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

HashTable.prototype._auditStorage = function(){
  if (this._storageLength / this._limit >= 0.75) {this._resize(2);}
  if (this._storageLength / this._limit < 0.25 && this._storageLength !== 0) {this._resize(0.5);}
};

HashTable.prototype._resize = function(multiplier){
  this._tempStorage = this._storage;
  this._storage = [];
  this._storageLength = 0;
  this._limit = this._limit * multiplier;
  this._moveToNewStorage(this._tempStorage);
  delete this._tempStorage;
};

HashTable.prototype._reduce = function(){
  console.log('reduce');
};

HashTable.prototype._moveToNewStorage = function(tempStore){
  for (var i = 0; i < (this._limit / 2); i++) { // iterate through each index
    if (tempStore[i]) { // check if undefined
      if (tempStore[i].length > 0) { // check if empty array
        for (var j = 0; j < tempStore[i].length; j++) { // iterate through each subArray
          if (tempStore[i][j]) { // check if undefined
            this.insert(tempStore[i][j][0],tempStore[i][j][1],'noAudit'); // call func(key, value)
          }
        }
      }
    }
  }
};
