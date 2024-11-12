"use strict";
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    sortear() {
        console.log(`El ticket ${this.ticket} es para ${this.nombre}`);
    }
}
let sorteo = new Sorteo("Franco");
sorteo.setTicket("M8");
sorteo.sortear();
let sorteo2 = new Sorteo("Lionel");
sorteo2.setTicket(10);
sorteo2.sortear();
