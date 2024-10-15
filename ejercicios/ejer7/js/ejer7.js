// Función para encontrar el número mayor en un array
function encontrarNumeroMayor(arr) {
    if (arr.length === 0) {
        return "El array está vacío";
    }
    return Math.max(...arr);
}

let numeros = [];
let preguntados;

do {
    preguntados = prompt("Introduce un número o escribe 'stop' para terminar:");

    
    if (preguntados.toLowerCase() !== 'stop') {
        let num = parseFloat(preguntados);  
        if (!isNaN(num)) {  
            numeros.push(num); 
        } else {
            alert("Por favor, introduce un número válido.");
        }
    }

} while (preguntados.toLowerCase() !== 'stop'); 
console.log("El array es",numeros); 

let numeroMayor = encontrarNumeroMayor(numeros);
console.log("El número mayor introducido es: " + numeroMayor);
