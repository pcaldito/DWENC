let datos = '12345,Javier Arias Carroza,45,Masculino,Gerente|67890,Pablo Caldito Gomez,33,Masculino,Desarrollador|11223,Levi Josue Candeias de Figueiredo,29,Masculino,Analista|44556,Jose Luis del Valle del Pino,50,Masculino,Contador|33445,David Fariña Morena,40,Masculino,Diseñador|22883,Alvaro Gomez Delgado,31,Masculino,Desarrollador|56789,Fernando Jose Gonzalez Bernaldez,38,Masculino,Consultor|34567,Angel Guiberteau Franco,47,Masculino,Administrador|12333,Paloma Hernandez Sanchez,28,Femenino,Marketing|67676,Miriam Lopez Vega,34,Femenino,Recursos Humanos|99887,Ceus Martin Llera,29,Masculino,Asistente|77665,Celia Moruno Herrojo,32,Femenino,Analista|55665,Ismael Paz Bernal,41,Masculino,Gerente de Proyecto|66778,Mauricio Peña Dominguez,36,Masculino,Auditor|88777,Carlos Rodriguez Botello,45,Masculino,Programador|33211,Alberto Sanchez Diaz,39,Masculino,Ingeniero|99123,David Silva Vega,35,Masculino,Soporte Técnico|78111,Hugo Sanchez Gallardo,28,Masculino,Diseñador|66112,Joaquin Francisco Telo Nuñez,52,Masculino,Director Financiero|11234,Maria Vidigal Barroso,30,Femenino,Contadora|';

// Declarar un array para almacenar los empleados
let empleados = [];

// Dividir los datos por el carácter '|'
let registros = datos.split('|');

// Iterar sobre cada registro y dividir por las comas
registros.forEach(registro => {
    let empleado = registro.split(',');
    empleados.push({
        id: empleado[0],
        nombre: empleado[1],
        edad: empleado[2],
        genero: empleado[3],
        puesto: empleado[4]
    });
});

// Mostrar los empleados en la consola o donde sea necesario
console.log(empleados);

function buscar(){
    let buscado=parseInt(prompt("Ingrese numero de documento: "));
    for(i=0;i<=empleados.length;i++){
        if(empleados[i].id==buscado){
            console.log(empleados[i]);
            return;
        }
    }
    console.log("No encontrado");
}

function agregar() {
    let nuevo = prompt("Ingrese nuevo trabajador: dni,nombre,edad,genero,puesto");
    
    // Dividir la cadena ingresada por comas
    let nuevoR = nuevo.split(",");
    
    // Asegurarse de que se hayan ingresado 5 datos
    if (nuevoR.length === 5) {
        // Agregar el nuevo trabajador al array empleados
        empleados.push({
            id: nuevoR[0],
            nombre: nuevoR[1],
            edad: nuevoR[2],
            genero: nuevoR[3],
            puesto: nuevoR[4]
        });
        console.log("Trabajador agregado correctamente:", nuevoR[1]);
    } else {
        console.log("Error: Ingrese correctamente todos los datos (dni,nombre,edad,genero,puesto).");
    }
}

function eliminar() {
    let dniEliminar = parseInt(prompt("Ingrese número de documento del empleado a eliminar:"));
    
    // Buscar el índice del empleado con ese ID
    let indice = empleados.findIndex(empleado => empleado.id == dniEliminar);
    
    // Si se encuentra el empleado, lo eliminamos
    if (indice !== -1) {
        let empleadoEliminado = empleados.splice(indice, 1); // Eliminar el empleado del array
        console.log("Empleado eliminado:", empleadoEliminado[0].nombre);
    } else {
        console.log("Empleado no encontrado.");
    }
}

buscar();
agregar();
eliminar();
