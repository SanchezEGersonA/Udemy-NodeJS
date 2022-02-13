

const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs")

console.clear();

console.log(argv);

// const [,,arg3] = process.argv;
// const [,base] = arg3.split("=");
// console.log(base);

crearArchivo(argv.b, argv.l, argv.h)
    .then((nombreArchivo) => console.log(nombreArchivo, "creado!"))
    .catch((err) => console.log(err));
