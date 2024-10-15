let num1=parseInt(prompt("Ingrese el lado del cuadrado: "));
let resultado=perimetro(num1);
console.log("El perimetro es: ",resultado);

function perimetro(a){
    return a*4;
}