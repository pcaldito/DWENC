let num1=parseInt(prompt("Ingrese el numero 1: "));
let num2=parseInt(prompt("Ingrese el numero 2: "));
let num3=parseInt(prompt("Ingrese el numero 3: "));
let num4=parseInt(prompt("Ingrese el numero 4: "));
let num5=parseInt(prompt("Ingrese el numero 5: "));
resultado=suma(num1,num2,num3,num4,num5);
console.log("El resultado de la suma es: ",resultado);

function suma(a,b,c,d,e){
    return a+b+c+d+e;
}