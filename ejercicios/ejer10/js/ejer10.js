function calculadora(num1, num2, operador) {
    // Convertimos los números a enteros o flotantes
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (operador === '+') {
        return num1 + num2;
    } else if (operador === '-') {
        return num1 - num2;
    } else if (operador === '*') {
        return num1 * num2;
    } else if (operador === '/') {
        return num2 !== 0 ? num1 / num2 : 'Error: División por cero';
    } else {
        return 'Operador no válido';
    }
}

// Solicitamos los números y el operador al usuario
let num1 = prompt("Número 1: ");
let num2 = prompt("Número 2: ");
let operador = prompt("Operador (+, -, *, /): ");

// Llamamos a la función y mostramos el resultado
let resultado = calculadora(num1, num2, operador);
console.log("Resultado: ", resultado);
