var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  list.addToTail = function(value) {
    let newNode = Node(value);
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
    // console.log(list)
  };

  list.removeHead = function() {
    console.log(list.head)
    var oldhead = list.head;
    list.head = list.head.next;
    // console.log(list.head)
    return oldhead.value;
  };
  
  list.contains = function(target) {
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
