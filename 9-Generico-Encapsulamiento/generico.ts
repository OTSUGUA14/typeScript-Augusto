class Sorteo<T>{
    private ticket?: T;

    constructor( private nombre: string){}

    setTicket(ticket: T){
        this.ticket = ticket;
    }

    getTicket(){
        return this.ticket;
    }

    public sortear(){
        console.log(`El ticket ${this.ticket} es para ${this.nombre}`);
    }
}

let sorteo = new Sorteo<string>("Franco");
sorteo.setTicket("M8");
sorteo.sortear();

let sorteo2 = new Sorteo<number>( "Lionel");
sorteo2.setTicket(10);
sorteo2.sortear();