// Creamos un array para almacenar las cuentas corrientes
let cuentas = [];

// Función para ingresar los datos de las cuentas corrientes
function ingresarCuentas() {
    while (true) {
        // Pedimos al usuario el número de cuenta
        let numeroCuenta = prompt("Ingrese el número de cuenta (o un número negativo para finalizar):");

        // Convertimos a número
        numeroCuenta = parseFloat(numeroCuenta);

        // Verificamos si el número de cuenta es negativo para salir
        if (numeroCuenta < 0) {
            break;
        }

        // Pedimos el nombre del cliente
        let nombreCliente = prompt("Ingrese el nombre del cliente:");

        // Pedimos el saldo actual
        let saldoActual = parseFloat(prompt("Ingrese el saldo actual:"));

        // Creamos un objeto para la cuenta y lo agregamos al array
        cuentas.push({
            numeroCuenta: numeroCuenta,
            nombreCliente: nombreCliente,
            saldoActual: saldoActual
        });
    }
}

// Función para mostrar el estado de cada cuenta y calcular la suma de saldos acreedores
function mostrarEstadoCuentas() {
    let sumaAcreedores = 0; // Variable para almacenar la suma de saldos acreedores

    console.log("Estado de las cuentas:");
    cuentas.forEach(cuenta => {
        let estadoCuenta;

        // Determinamos el estado de la cuenta según el saldo
        if (cuenta.saldoActual > 0) {
            estadoCuenta = "Acreedor";
            sumaAcreedores += cuenta.saldoActual; // Sumamos a los acreedores
        } else if (cuenta.saldoActual < 0) {
            estadoCuenta = "Deudor";
        } else {
            estadoCuenta = "Nulo";
        }

        // Mostramos los datos de la cuenta
        console.log(`Número de cuenta: ${cuenta.numeroCuenta}, Nombre del cliente: ${cuenta.nombreCliente}, Estado: ${estadoCuenta}`);
    });

    // Mostramos la suma total de los saldos acreedores
    console.log(`Suma total de saldos acreedores: ${sumaAcreedores}`);
}

// Llamamos a las funciones
ingresarCuentas();
mostrarEstadoCuentas();
