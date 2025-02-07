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
    dijkstra(start,finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};

        for(let vertex in this.adjencyList){
            if(vertex === start ){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
                
            }else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long as there is someting to visit 
        while(nodes.values.length){
            smallesst = nodes.dequeue().val;
            if(smallesst === finish){

            }
            if(smallesst || distances[smallesst !== Infinity]){
                for(let neighbour in this.adjencyList[smallesst] ){
                    let nextNode = this.adjencyList[smallesst];
                    let candidate = distances[smallest] + nextNode.weight;
                    if(candidate < distances[nextNode.node]){
                        
                    }
                }
            }

        }

    }
}



var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);