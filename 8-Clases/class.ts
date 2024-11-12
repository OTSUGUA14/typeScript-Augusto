class Pelicula{
    titulo?: string;
    director?: string;
    actores?: string[];
    presupuesto?: number;

    constructor(titulo: string, director: string, actores: string[], presupuesto: number){
        this.titulo = titulo;
        this.director = director;
        this.actores = actores;
        this.presupuesto = presupuesto;
    }

    public verPresupuesto(){
        console.log(`El presupuesto de "${this.titulo}" es de ${this.presupuesto} dolares`);
    }
}

let terror = new Pelicula("El conjuro", "James Wan", ["Patrick Wilson", "Vera Farmiga"], 550200);

terror.verPresupuesto();