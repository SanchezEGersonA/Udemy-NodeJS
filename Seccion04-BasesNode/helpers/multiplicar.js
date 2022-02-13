
const fs = require("fs");

const crearArchivo = async(base, listar, hasta) => {

    try {

        let salida = "";
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} * ${i} = ${base * i}\n`;
        }

        if (listar) {
            console.log("==============================================");
            console.log(`               Tabla de ${base}               `);
            console.log("==============================================");
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
        
    } catch (error) {
        throw error;
    }

}

// const crearArchivo = ( base ) => {

//     return new Promise = ((resolve, reject) => {

//         console.clear();
//         console.log("==============================================");
//         console.log(`               Tabla de ${base}               `);
//         console.log("==============================================");
        
//         let salida = "";
//         for (let i = 1; i <= 10; i++) {
//             salida += `${base} * ${i} = ${base * i}\n`;
//         }
//         console.log(salida);
//         fs.writeFileSync(`tabla-${base}.txt`, salida);
//         resolve(`tabla-${base}.txt`);

//     })

// }

module.exports = {
    crearArchivo
}

