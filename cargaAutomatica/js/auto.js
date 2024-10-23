let empleados=[];

function cargarDatosFetch(){
    fetch('./txt/empleados2DAW.txt')
    .then(response =>{
        if(!response.ok){
            throw new Error ('Error al cargar el archivo');
        }
        return response.text();
    })
    .then(data =>{
        let empleados=cargarDatos(data);

        mostrarEmpleados(empleados);

        buscar();
    })
    
    .catch(error =>{
        console.error("Error", error);
    })

}

function cargarDatos(data){
    let registros = data.split('\n');

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
    return empleados;
}

function mostrarEmpleados(empleados){
    console.log(empleados);
}

function buscar(){
    let buscado=parseInt(prompt("Ingrese dni para buscar: "));
    for(i=0;i<empleados.length;i++){
        if(empleados[i].id==buscado){
            console.log(empleados[i]);
            return;
        }
    }

    console.log("No encontrado");
}

cargarDatosFetch();
