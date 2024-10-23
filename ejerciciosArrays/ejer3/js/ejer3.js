let array = [];

for(i=0;i<5;i++){
    let valor=parseInt(prompt("Ingrese la altura en cm: "));
    array.push(valor);
}

let resultado=promedio(array);
console.log("La media de altura es: ", resultado);

function promedio(array){
    let suma=0;
    for(i=0;i<5;i++){
        suma+=array[i];
    }
     return media=suma/5;
}