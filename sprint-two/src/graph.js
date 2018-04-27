

// Instantiate a new graph
var Graph = function() {
  this.newGraph = {};
  this.index = 0;
  this.connected = {};
  this.connectedIndex = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  console.log('added ' + node)
  this.newGraph[this.index] = node;
  this.index++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for(var i in this.newGraph){
    if(this.newGraph[i] === node){
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  console.log('deleted ' +node)
  for(var i in this.newGraph){
    if(this.newGraph[i] === node){
      delete this.newGraph[i];
      for(var j in this.connected){
        if(this.connected[j].includes(node)){
          delete this.connected[j]
        }
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for(var i in this.connected){
    if(this.connected[i].includes(fromNode) && this.connected[i].includes(toNode)){
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.connected[this.connectedIndex] = [fromNode, toNode];
  this.connectedIndex++;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for(var i in this.connected){
    if(this.connected[i].includes(fromNode) && this.connected[i].includes(toNode)){
      delete this.connected[i];
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(var i in this.newGraph){
    this.newGraph[i] = cb(this.newGraph[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


