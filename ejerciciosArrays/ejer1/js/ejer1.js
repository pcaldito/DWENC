let array = [];  // Inicializar el array fuera del bucle

// Solicitar 10 valores al usuario
for (let i = 0; i < 10; i++) {
    let valor = parseInt(prompt("Ingrese valores: "));
    array.push(valor);  // Agregar cada valor ingresado al array
}

let resultado = suma(array);  // Llamar a la función suma y pasarle el array
console.log("El resultado de la suma de los últimos 5 números es: ", resultado);

// Función que suma los últimos 5 números
function suma(array) {
    let suma = 0;  // Inicializar la suma en 0
    for (let i = 9; i >= 5; i--) {  // Iterar desde el índice 9 hasta el 5
        suma += array[i];  // Sumar los valores del array
    }
    return suma;  // Devolver el resultado
}
