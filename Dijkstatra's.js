class WeightedGraph {
    constructor() {
        this.adjencyList = {};
    }
    addVertex(vertex){
        if(!this.adjencyList[vertex]) this.adjencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2,weight){
        this.adjencyList[vertex1].push({node:vertex2, weight});
        this.adjencyList[vertex2].push({node:vertex1, weight});
    }
}

class PriorityQueue {
    constructor(){
      this.values = [];
    }
    enqueue(val, priority) {
      this.values.push({val, priority});
      this.sort();
    };
    dequeue() {
      return this.values.shift();
    };
    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    };
  }
{
    "A": [""]
}