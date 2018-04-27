var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {};
  set.index = 1;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage[this.index] = item;
  this.index++;
};

setPrototype.contains = function(item) {
  for (let i = 0; i < this.index; i++) {
    if (this.storage[i] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  for (let i = 0; i < this.index; i++) {
    if (this.storage[i] === item) {
      delete this.storage[i];
      this.index --;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
