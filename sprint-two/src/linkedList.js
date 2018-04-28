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
  };

  list.removeHead = function() {
    var oldhead = list.head;
    list.head = list.head.next;
    return oldhead.value;
  };
  
  list.contains = function(target) {
    var within = function(item, target) {
      if (item.value === target){
        return true;
      } else {
        if (item.next){
          return within (item.next, target);
        }
      }
      return false;
    }
    return within(list.head, target);
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
