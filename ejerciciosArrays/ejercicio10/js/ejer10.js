let personas = [];

function ingresarPersonas() {
    while (true) {
        let dni = parseInt(prompt("Ingrese el dni de la persona (o un valor <= 0 para terminar): "));
        if (dni <= 0) {
            break; // Termina el bucle si el DNI es menor o igual a 0
        }

        let edad = parseInt(prompt("Ingrese la edad de la persona: "));
        let sexo = prompt("Ingrese el sexo de la persona (M o F):").toUpperCase();

        personas.push({
            dni: dni,
            edad: edad,
            sexo: sexo
        });
    }
}

function leerDatos() {
    let suma = 0;
    let mujeres = 0;
    let hombres = 0;
    let rango = 0;

    for (let i = 0; i < personas.length; i++) {
        if (personas[i].sexo === "F") {
            mujeres++;
        }
        if (personas[i].sexo === "M") {
            hombres++;
            if (personas[i].edad >= 16 && personas[i].edad <= 65) {
                rango++;
            }
        }
        suma++;

        console.log(`Dni: ${personas[i].dni}, Edad: ${personas[i].edad}, Sexo: ${personas[i].sexo}`);
    }

    console.log("El número de personas totales es:", suma);
    console.log("El número total de mujeres es:", mujeres);
    console.log("El número total de hombres es:", hombres);
    console.log("El número de hombres entre 16 y 65 años es:", rango);
}

// Ejecución
ingresarPersonas();
leerDatos();
