//LABORATORIO 3 TYPECRIPT

interface Grupo {
    Nombre : string; 
    Fundacion : number;
    Activo : boolean;
    Genero : string;
}

//Género de música
const PopRock = "🎵 Pop Rock";
const Rock = "🎸 Rock"
const HardRock = "🤘 Hard Rock"
const Classical = "🎼 Classical";

//Definición de grupos musicales
const grupo1 : Grupo = {
    Nombre: "The Beatles",
    Fundacion: 1960,
    Activo: true,
    Genero: `${Rock}`,
};

const grupo2 : Grupo = {
    Nombre: "Queen",
    Fundacion: 1970,
    Activo: false,
    Genero: `${Rock}`,
};

const grupo3 : Grupo = {
    Nombre: "AC DC",
    Fundacion: 1973,
    Activo: true,
    Genero: `${HardRock}`,
};

const grupo4 : Grupo = {
    Nombre: "Ludwing van Beethoven",
    Fundacion: 1770,
    Activo: false,
    Genero: `${Classical}`,
};

const grupo5 : Grupo = {
    Nombre: "The Rolling Stones",
    Fundacion: 1962,
    Activo: true,
    Genero: `${Rock}`,
};


// Mostrar los grupos musicales en consola
console.log(
  "%c" + grupo1.Nombre,
  "font-weight: bold; font-size: 20px; color: green;"
);
console.log(`Año de fundación: ${grupo1.Fundacion} | Activo: ${grupo1.Activo ? "Sí" : "No"} | Género: ${grupo1.Genero}\n`);

console.log(
  "%c" + grupo2.Nombre,
  "font-weight: bold; font-size: 20px; color: green;"
);
console.log(`Año de fundación: ${grupo2.Fundacion} | Activo: ${grupo2.Activo ? "Sí" : "No"} | Género: ${grupo2.Genero}\n`);

console.log(
  "%c" + grupo3.Nombre,
  "font-weight: bold; font-size: 20px; color: green;"
);
console.log(`Año de fundación: ${grupo3.Fundacion} | Activo: ${grupo3.Activo ? "Sí" : "No"} | Género: ${grupo3.Genero}\n`);

console.log(
  "%c" + grupo4.Nombre,
  "font-weight: bold; font-size: 20px; color: green;"
);
console.log(`Año de fundación: ${grupo4.Fundacion} | Activo: ${grupo4.Activo ? "Sí" : "No"} | Género: ${grupo4.Genero}\n`);

console.log(
  "%c" + grupo5.Nombre,
  "font-weight: bold; font-size: 20px; color: green;"
);
console.log(`Año de fundación: ${grupo5.Fundacion} | Activo: ${grupo5.Activo ? "Sí" : "No"} | Género: ${grupo5.Genero}\n`);