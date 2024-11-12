interface Persona{
    nombre: string,
    edad: number,
    club?: string
}

let persona: Persona = {
    nombre: "Franco",
    edad: 25,
    club : "River Plate"
}

 

let persona2: Persona = {
    nombre: "Lionel",
    edad: 37,
    club: "Newell's Old Boys"
}

function hincha(persona: Persona){
    console.log(`${persona.nombre} es fanatico de ${persona.club}`);
}

hincha(persona);
hincha(persona2);