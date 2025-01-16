// graphs 

class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1,v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            v => v !== v2
        );
        this.adjacencyList[v2] = this.adjacencyList[v1].filter(
            v => v !== v1
        );


    }
    removeVertex(vertex){
        while (this.adjacencyList[vertex].length){
            const adjacencyVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacencyVertex);
        }  
        delete this.adjacencyList[vertex]
    }
    depthFirstRecursive(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            });
        })(start);

        return result;
    }
    depthFirstIterative(start){
        const stack = [start];
        const result = [];
        const visited = {};
        visited[start] = true;

        while(stack.length){
            let currentVertex = stack.pop();
            result.push(currentVertex)
        }

        this.adjacencyList[currentVertex].forEach(neighbor => {
            if(!visited[neighbor]){
                visited[neighbor] = true;
                stack.push(neighbor)
            }
        })
return result; 
    }
    
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

Sakataginsan8

/* 
   a 
   /   \
   b    c
   d ----  e 
   \  f   /
*/

/* function DFSRecursive(start){
    const result = []
    const visited = {}
const adjacencyList = this.adjacencyList;
    (function dfs(vertex){
if(!vertex) return null;
visited[vertex] = true;
list.push(vertex); 
adjacencyList[vertex].forEach(neighbour => {
    if(!visited[neighbour]){
        return dfs(neighbour)
}

    })

    })(start)
return result;
} */

console.log(g.depthFirstRecursive("A"))