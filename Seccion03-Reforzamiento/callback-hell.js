

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

const getEmpleado = (id, callback) => {
    const empleado = empleados.find((e) => e.id === id) ?.nombre;
    if (empleado) {
        callback(null, empleado);
    }else {
        callback(`Empleado con id ${id} no existe`);
    }
} 

const getSalario = (id, callback) => {
    const salario = salarios.find((s) => s.id === id) ?.salario;
    if (salario) {
        callback(null, salario)
    } else {
        callback(`Empleado con id ${id} no tiene salario`);
    }
}

const id = 3;

getEmpleado(id, (err, empleado) => {
    if(err) {
        console.log("Error!");
        return console.log(err);
    }
    console.log("Empleado existe");
    console.log(empleado);
    getSalario(id, (err, salario) => {
        if(err) {
            console.log("Error!");
            return console.log(err);
        }
        // console.log("Salario existe");
        console.log(`El empleado ${empleado}, tiene un salario de ${salario}.`);
    });
});



