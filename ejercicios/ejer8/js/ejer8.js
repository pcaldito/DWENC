function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}
// Ejemplo de uso
let texto = prompt("Cadena: ");
console.log(invertirCadena(texto));
