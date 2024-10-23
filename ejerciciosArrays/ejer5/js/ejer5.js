let array = [];

for(i=0;i<8;i++){
    let valor=parseInt(prompt("Ingrese el valor: "));
    array.push(valor);
}

console.log("El vector es: ", array);

let resultado=programa(array);
function programa(array){
    let suma=0;
    let sumamayor36=0;
    let mayor50=0;
    for(i=0;i<8;i++){
        suma+=array[i];
        if(array[i]>36){
            sumamayor36+=array[i];
        }
        if(array[i]>50){
            mayor50++;
        }
    }

    console.log("La suma del array es: ",suma);
    console.log("La suma de los numeros mayores de 36 es: ",sumamayor36);
    console.log("El numero de valores por encima de 50 es: ", mayor50);
}