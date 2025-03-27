// Ejercicio 3: Verificar si un número es positivo, negativo o cero

// Solicitar al usuario que ingrese un número
const numero = parseFloat(prompt("Ingresa un número:"));

// Verificar si el número es positivo, negativo o cero
if (numero > 0) {
    console.log(`El número ${numero} es positivo.`);
} else if (numero < 0) {
    console.log(`El número ${numero} es negativo.`);
} else {
    console.log(`El número es cero.`);
}