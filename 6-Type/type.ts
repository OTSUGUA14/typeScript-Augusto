type Persona = {
    nombre: string,
    edad: number,
    club?: string
}

let persona: Persona = {
    nombre: "Franco",
    edad: 25,
    club : "River Plate"
}

console.log("Primer Objeto tipado");

console.log("Nombre: ", persona.nombre);
console.log("Edad: ", persona.edad);    
console.log("Club: ", persona.club);    

let persona2: Persona = {
    nombre: "Lionel",
    edad: 37
}

console.log("Segundo Objeto tipado");

console.log("Nombre: ", persona2.nombre);
console.log("Edad: ", persona2.edad);