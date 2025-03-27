// Ejercicio 2: Verificar si un número es par o impar

// Solicitar al usuario que ingrese un número
const numero = parseInt(prompt("Ingresa un número:"));

// Verificar si el número es par o impar
if (numero % 2 === 0) {
    console.log(`El número ${numero} es par.`);
} else {
    console.log(`El número ${numero} es impar.`);
}