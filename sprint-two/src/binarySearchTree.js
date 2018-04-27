var BinarySearchTree = function(value) {
  var newTreeBinary = {};
  _.extend(newTreeBinary, treeMethodsBinary);
  newTreeBinary.value = value;
  
  newTreeBinary.left = {};
  newTreeBinary.right = {};
  return newTreeBinary;
};

var treeMethodsBinary = {};

treeMethodsBinary.insert = function(value) {
   var child = BinarySearchTree(value);
  if (child.value < this.value) {
    if(this.left.value){
      this.left.insert(child.value);
    } else {
      this.left = child;
    }  
  }
  if (child.value > this.value) {
    if(this.right.value) {
      this.right.insert(child.value);
    } else {
      this.right = child;
    }
  } 
};

treeMethodsBinary.contains = function(target) {
  if(this.value === target){
    return true;
  }
  if(this.value < target && this.right.value){
    return this.right.contains(target);
  }
  if(this.value > target && this.left.value){
    return this.left.contains(target);
  }
  return false;
};

treeMethodsBinary.depthFirstLog = function(func){
  this.value = func(this.value)
    if(this.left.value){
      this.left.depthFirstLog(func);
    }
    if(this.right.value){
      this.right.depthFirstLog(func);
    }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
