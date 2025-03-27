// Ejercicio Avanzado 3: Procesamiento de datos con funciones de orden superior y Promesas

// Simula una base de datos de usuarios
const usuarios = [
    { id: 1, nombre: "David", edad: 25, activo: true },
    { id: 2, nombre: "Ana", edad: 30, activo: false },
    { id: 3, nombre: "Luis", edad: 22, activo: true },
    { id: 4, nombre: "María", edad: 28, activo: true },
    { id: 5, nombre: "Carlos", edad: 35, activo: false },
];

// Función que simula una llamada a una base de datos con Promesas
function obtenerUsuariosActivos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const activos = usuarios.filter(usuario => usuario.activo);
            if (activos.length > 0) {
                resolve(activos);
            } else {
                reject("No hay usuarios activos.");
            }
        }, 1000);
    });
}

// Función que calcula el promedio de edad de los usuarios
function calcularPromedioEdad(usuarios) {
    const totalEdad = usuarios.reduce((suma, usuario) => suma + usuario.edad, 0);
    return (totalEdad / usuarios.length).toFixed(2);
}

// Función principal que coordina el flujo
async function procesarUsuarios() {
    try {
        console.log("Obteniendo usuarios activos...");
        const usuariosActivos = await obtenerUsuariosActivos();
        console.log("Usuarios activos:", usuariosActivos);

        const promedioEdad = calcularPromedioEdad(usuariosActivos);
        console.log(`El promedio de edad de los usuarios activos es: ${promedioEdad}`);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Ejecutar la función principal
procesarUsuarios();