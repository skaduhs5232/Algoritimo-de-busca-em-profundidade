//link ide online:https://www.mycompiler.io/view/1yYDLlCjYpN

class Grafo {
    private vertices: number;
    private matrizAdjacencia: number[][];

    constructor(matrizAdjacencia: number[][]) {
        this.vertices = matrizAdjacencia.length;
        this.matrizAdjacencia = matrizAdjacencia;
    }

    calculoMatriz(v: number, visitados: boolean[], predecessores: number[], temposDescoberta: number[], temposFinalizacao: number[], tempo: {valor: number}) {
        visitados[v] = true;
        tempo.valor++;
        temposDescoberta[v] = tempo.valor;
        console.log(`Vértice ${v} visitado no tempo ${temposDescoberta[v]} com predecessor ${predecessores[v]}`);

        let vizinhos = this.matrizAdjacencia[v];
        if (vizinhos) {
            for (let i = 0; i < vizinhos.length; i++) {
                let vizinho = i;
                if (vizinhos[i] === 1 && !visitados[vizinho]) {
                    predecessores[vizinho] = v;
                    this.calculoMatriz(vizinho, visitados, predecessores, temposDescoberta, temposFinalizacao, tempo);
                }
            }
        }

        tempo.valor++;
        temposFinalizacao[v] = tempo.valor;
        console.log(`Vértice ${v} finalizado no tempo ${temposFinalizacao[v]}`);
    }

    profundidade(verticeInicial: number) {
        let visitados: boolean[] = [];
        let predecessores: number[] = [];
        let temposDescoberta: number[] = [];
        let temposFinalizacao: number[] = [];
        let tempo = {valor: 0};

        for (let i = 0; i < this.vertices; i++) {
            visitados[i] = false;
            predecessores[i] = -1; // !!!Inicializar predecessor como -1 indicando que não há predecessor!!!
            temposDescoberta[i] = 0;
            temposFinalizacao[i] = 0;
        }

        this.calculoMatriz(verticeInicial, visitados, predecessores, temposDescoberta, temposFinalizacao, tempo);
    }
}

// Exemplo de uso com matriz de adjacência:
let matriz = [
    [0, 1, 1, 0, 0, 0],
    [1, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 1],
    [0, 0, 0, 1, 1, 0]
];

let g = new Grafo(matriz);
//nao consegui fazer o mesmo print do algoritimo de largura, por causa do for desse codigo e pq eu nao sei 
//type script direito
console.log("algoritimo de busca em Profundidade:");
//dessa vez consegui fzr começar do vertice 0
g.profundidade(0);
