"use strict";
let persona = {
    nombre: "Franco",
    edad: 25,
    club: "River Plate"
};
let persona2 = {
    nombre: "Lionel",
    edad: 37,
    club: "Newell's Old Boys"
};
function hincha(persona) {
    console.log(`${persona.nombre} es fanatico de ${persona.club}`);
}
hincha(persona);
hincha(persona2);
