class Graph{
    constructor(vertices){
        this.vertices = vertices
        this.matrix = Array.from({length:vertices} , () => Array(vertices).fill(0))
    }
    addEdge(u,v){
        this.matrix[u][v] = 1
    }
}