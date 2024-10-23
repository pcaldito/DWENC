let array = [250,125,290,420,350];
console.log("Los sueldos son: ",array);
let resultado=sueldos(array);


function sueldos(array){
    let suma=0;
    let pobres=0;
    let ricos=0;
    for(i=0;i<5;i++){
        suma+=array[i];
        if(array[i]>100 && array[i]<300){
            pobres++;
        }else{
            ricos++;
        }
    }

    console.log("Los que cobran entre 100 y 300 son: ",pobres);
    console.log("Los que cobran mas de 300 son: ",ricos);
    console.log("La empresa gasta en sueldos: ",suma);
}