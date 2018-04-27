

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.bucket = [];
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
     for (let i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        this._storage.get(index)[i][1] = v;
      } else {
        this.bucket.push([k,v])
      }
    }
  } else {
    this.bucket.push([k,v]);
  }
  this._storage.set(index, this.bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
     for (let i = 0; i < this._storage.get(index).length; i++) { 
      if (this._storage.get(index)[i][0] === k) { 
        return this._storage.get(index)[i][1]
      } 
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


