let array=[];

function ingresar(){

    for(i=0;i<10;i++){
        let valor=parseInt(prompt("Ingrese el numero entero: "));
        array.push(valor);
    }

    console.log("El aray es: ", array);
}

function leer(){
    let pos=0;
    let neg=0;
    let multiplos=0;
    let sumaPares=0;

    for(i=0;i<10;i++){
        if(array[i]>0){
            pos++;
        }
        if(array[i]<0){
            neg++;
        }
        if(array[i]%15==0){
            multiplos++;
        }
        if(array[i]%2==0){
            sumaPares=array[i]+sumaPares;
        }
    }

    console.log("Positivos: ",pos);
    console.log("Negativos",neg);
    console.log("Multiplos de 15: ",multiplos);
    console.log("Suma de los pares: ", sumaPares);
}

ingresar();
leer();


