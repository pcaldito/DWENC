let num1=parseInt(prompt("Introduce el numero 1"));
let num2=parseInt(prompt("Introduce el numero 2"));
let num3=parseInt(prompt("Introduce el numero 3"));
resultado=encontrarMenor(num1,num2,num3);
console.log("El numero menor es", resultado);
function encontrarMenor(a,b,c){
    return Math.min(a,b,c);
}