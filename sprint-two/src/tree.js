var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;

  // your code here
  newTree.index = 0;
  newTree.children = {};  // fix me
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
   var child = Tree(value);
   this.children[this.index] = child;
   this.index++;
};

treeMethods.contains = function(target) {
  for (var i in this.children){
    if(this.children[i].value === target){
      return true;
    }
    if(typeof this.children[i] === 'object'){
      if(this.children[i].contains(target)){
        return true;
      }
    }
  }
  return false;
};

treeMethods.changesAllValues = function(cb) {
  for (var i in this.children){
    if(this.children[i].value){
      cb(this.children[i].value);
    }
    if(typeof this.children[i] === 'object'){
      this.children[i].changesAllValues(cb);
    }
  }
}



/*
 * Complexity: What is the time complexity of the above functions?
 */
