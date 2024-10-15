let num1=parseInt(prompt("Ingrese el numero: "));
resultado=raiz(num1);
console.log("La raiz cuadrada de ",num1, " es: ",resultado);

function raiz(a){
    return Math.sqrt(a);
}