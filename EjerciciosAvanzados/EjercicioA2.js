// Ejercicio 2: Encontrar la subsecuencia más larga común entre dos cadenas (nivel avanzado)

function subsecuenciaComunMasLarga(cadena1, cadena2) {
    const m = cadena1.length;
    const n = cadena2.length;

    // Crear una matriz para almacenar los resultados
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Llenar la matriz usando programación dinámica
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (cadena1[i - 1] === cadena2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Reconstruir la subsecuencia común más larga
    let i = m, j = n;
    let subsecuencia = '';

    while (i > 0 && j > 0) {
        if (cadena1[i - 1] === cadena2[j - 1]) {
            subsecuencia = cadena1[i - 1] + subsecuencia;
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    return subsecuencia;
}

// Pruebas
console.log(subsecuenciaComunMasLarga("ABAZDC", "BACBAD")); // "ABAD"
console.log(subsecuenciaComunMasLarga("AGGTAB", "GXTXAYB")); // "GTAB"
console.log(subsecuenciaComunMasLarga("ABC", "DEF")); // ""