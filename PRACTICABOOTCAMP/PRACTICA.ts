/* console.log("Hello World!");

let nombre : string | null = null; //Definición de variable de tipo string
//String puede ser null, por lo que se usa el operador | para indicar que puede ser de tipo string o null
//Null es un valor que indica la ausencia de un valor, por lo que es útil para inicializar variables que pueden no tener un valor asignado al principio

nombre = "Juan";
console.log(nombre);

//Meto aquí una cagada para ver si se detecta el error
nombre = "5"; //Asignar un valor de tipo string
console.log(nombre);

//ejercicio
let age: string | null = null; //Definición de variable de tipo string o null
age = "No te lo digo"; //Asignar un valor de tipo string, esto debería dar error en TypeScript
*/


//Apartado Interfaces

interface Cliente {
    nombre: string; //Propiedad de tipo string
    edad: number; //Propiedad de tipo number
    //edad?: number; //Propiedad opcional, si se usa el signo ? al final del nombre de la propiedad, esta propiedad es opcional
};

//Definición de un objeto que implementa la interfaz Cliente
const clienteA : Cliente = {
    nombre: "Pepe",
    edad: 30,
};

const clienteB : Cliente = {
    nombre: "Juan",
    edad: 25,
};

//Práctica con las interfaces

interface Pelicula {
    titulo: string; //Propiedad de tipo string
    año: number; //Propiedad de tipo number
    genero: string; //Propiedad de tipo string
};

const peliculaA : Pelicula = {
    titulo: "Blade Runner",
    año: 1982,
    genero: "Ciencia Ficción",
};

const peliculaB : Pelicula = {
    titulo: "El Padrino",
    año: 1972,
    genero: "Drama",
};

console.log(peliculaA);
console.log(peliculaB);
