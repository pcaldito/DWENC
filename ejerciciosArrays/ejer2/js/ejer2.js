let array = [];
for(i=0;i<10;i++){
    let valor=parseInt(prompt("Ingrese la nota del alumno "));
    array.push(valor);
}

let resultado=notables(array);


function notables(array){
    let contadorM=0;
    let contadorm=0;
    for(i=0;i<10;i++){
        if(array[i]<7){
            contadorm++;
        }else{
            contadorM++;
        }
    }
    console.log("El numero de notas menores a 7 es: ", contadorm);
    console.log("El numero de notas mayores a 7 es: ", contadorM);
}