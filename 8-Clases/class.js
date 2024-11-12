"use strict";
class Pelicula {
    constructor(titulo, director, actores, presupuesto) {
        this.titulo = titulo;
        this.director = director;
        this.actores = actores;
        this.presupuesto = presupuesto;
    }
    verPresupuesto() {
        console.log(`El presupuesto de "${this.titulo}" es de ${this.presupuesto} dolares`);
    }
}
let terror = new Pelicula("El conjuro", "James Wan", ["Patrick Wilson", "Vera Farmiga"], 550200);
terror.verPresupuesto();
