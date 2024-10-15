let num1=parseInt(prompt("Ingrese el numero 1: "));
let num2=parseInt(prompt("Ingrese el numero 2: "));
let num3=parseInt(prompt("Ingrese el numero 3: "));
resultado=promedio(num1,num2,num3);
console.log("El promedio es: ",resultado);

function promedio(a,b,c){
    return (a+b+c)/3;
}