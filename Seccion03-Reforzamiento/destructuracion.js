
const deadpool = {
    nombre: "Wade",
    apellido: "Winston",
    poder: "Regeneracion",
    edad: 35,
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder

// let { nombre, apellido, poder, edad = 0 } = deadpool;

function imprimeHeroe ({nombre, apellido, poder, edad = 0}) {
    // let { nombre, apellido, poder, edad = 0 } = heroe;
    console.log(nombre + " " + apellido + " " + poder + " " + edad);
}

// imprimeHeroe(deadpool);

const heroes = ["deadpool", "batman", "superman"];
// let h1 = heroes[0]
// let h2 = heroes[1]
// let h3 = heroes[2]
// const [h1, h2, h3] = heroes;
const [, , h3] = heroes;
console.log(h3);
