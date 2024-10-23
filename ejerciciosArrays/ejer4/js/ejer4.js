let vector1= [];

for(i=0;i<5;i++){
    let valor=parseInt(prompt("Ingrese el valor del primer vector: "));
    vector1.push(valor);
}

let vector2= [];

for(i=0;i<5;i++){
    let valor=parseInt(prompt("Ingrese el valor del segundo vector: "));
    vector2.push(valor);
}

console.log("Valor del primer vector:",vector1);
console.log("Valor del segundo vector:",vector2);

let vector3= [];
let resultado=suma(vector1,vector2);
console.log("El resultado es: ",resultado);

function suma(a,b){
    for(i=0;i<5;i++){
        vector3[i]=a[i]+b[i];
    }
    return vector3;
}