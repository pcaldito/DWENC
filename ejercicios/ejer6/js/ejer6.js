let num = prompt("Introduce un número para mostrar su tabla de multiplicar:");
num = parseInt(num);  
let i = 1;

while(i <= 10) {
    console.log(num + " x " + i + " = " + (num * i));
    i++;
}
