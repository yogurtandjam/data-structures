var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  var nodes = {};
  var index = 0;

  list.addToTail = function(value) {
    nodes[index] = new Node(value);
    list.tail = nodes[index];
    if (list.head == null) {
      list.head = list.tail
    }
    index++;
  };

  list.removeHead = function() {
    index--;
    var lengthy = Object.keys(nodes);
    var header = nodes[0];
    for (var i = 0; i < lengthy.length - 1; i++){
      nodes[i] = nodes[i + 1];
    }
    delete nodes[lengthy.length - 1]
    list.head = nodes[0];
    return header.value;
  };
  
  list.contains = function(target) {
    for (var j in nodes){
      if(nodes[j].value === target){
        return true;
      }
    }
    return false;
  };
  
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
