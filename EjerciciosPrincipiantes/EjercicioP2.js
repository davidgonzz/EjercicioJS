const readline = require('readline');

// Ejercicio 2: Verificar si un número es par o impar


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa un número: ", (input) => {
    const numero = parseInt(input);

    if (isNaN(numero)) {
        console.log("Por favor, ingresa un número válido.");
    } else if (numero % 2 === 0) {
        console.log(`El número ${numero} es par.`);
    } else {
        console.log(`El número ${numero} es impar.`);
    }

    rl.close();
});