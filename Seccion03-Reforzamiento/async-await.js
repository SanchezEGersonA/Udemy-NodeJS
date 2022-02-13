const empleados = [
    {
        id: 1,
        nombre: "Gerson"
    }, 
    {
        id: 2,
        nombre: "Nelson"
    },
    {
        id: 3,
        nombre: "Yoni"
    },
];

const salarios = [
    {
        id: 1,
        salario: 2500
    }, 
    {
        id: 2,
        salario: 7000
    },
    {
        id: 3
    },
];



const getEmpleado = (id) => {
    
    return new Promise((resolve, reject) => {
        const empleado = empleados.find((e) => e.id === id) ?.nombre;
        (empleado) ? resolve(empleado) : reject(`No existe empleado con id ${id}`);
    });

} 

const getSalario = (id) => {
    
    return new Promise((resolve, reject) => {
        const salario = salarios.find((s) => s.id === id) ?.salario;
        (salario) ? resolve(salario) : reject(`No existe salario para el empleado con id ${id}`);
    });

} 

const getInfoUsuario = async(id) => {


    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario de ${empleado} es de ${salario}`;
    } catch (error) {
        throw error;
    }

}


const id = 3;
getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));






