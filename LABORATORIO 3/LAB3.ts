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
    Activo: false,
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
