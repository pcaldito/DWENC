let lista1 = [];
for(i=0;i<3;i++){
    let valor=parseInt(prompt("Ingrese la lista 1: "));
    lista1.push(valor);
}

console.log("La lista 1 es: ", lista1);

let lista2 = [];
for(i=0;i<3;i++){
    let valor=parseInt(prompt("Ingrese la lista 2: "));
    lista2.push(valor);
}

console.log("La lista 2 es: ", lista2);

let resultado=compara(lista1,lista2);
console.log(resultado);

function compara(lista1,lista2){
    let suma1=0;
    let suma2=0;
    for(i=0;i<3;i++){
        suma1+=lista1[i];
        suma2+=lista2[i];
    }
    if(suma1<suma2){
        return "Lista 2 mayor";
    }else{
        if(suma1>suma2){
            return "Lista 1 mayor";
        }else{
            if(suma1==suma2){
                return "Listas iguales";
            }
        }
    }
}