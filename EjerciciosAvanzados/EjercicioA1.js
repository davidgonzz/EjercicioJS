// Ejercicio 1: Verificar si una cadena es un palíndromo (nivel avanzado)

function esPalindromo(cadena) {
    // Eliminar espacios, caracteres especiales y convertir a minúsculas
    const cadenaLimpia = cadena
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '');

    // Verificar si la cadena es igual a su reverso
    return cadenaLimpia === cadenaLimpia.split('').reverse().join('');
}

// Pruebas
console.log(esPalindromo("A man, a plan, a canal, Panama")); // true
console.log(esPalindromo("No 'x' in Nixon")); // true
console.log(esPalindromo("Esto no es un palíndromo")); // false