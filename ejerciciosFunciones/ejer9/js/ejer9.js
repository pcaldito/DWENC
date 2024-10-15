let num1=parseInt(prompt("Ingrese el numero: "));
resultado=potencia(num1);
console.log("la tercera potencia de ",num1," es: ", resultado);
function potencia(a){
    return a*a*a;
}