
let array= [];
for(i=0;i<5;i++){
    let valor=parseInt(prompt("Ingrese valores: "));
    array.push(valor);
}
console.log("array: ",array);
let resultado=[];
resultado=paroimpar(array);
console.log(resultado);

function paroimpar(array){
    for(i=0;i<5;i++){
        if(array[i]%2==0){
           resultado[i]="Par";
        }else{
            resultado[i]="Impar";
        }
    }
    return resultado;
}