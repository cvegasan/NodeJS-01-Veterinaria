// Recordar
// process.argv: Obtiene los argumentos proporcionados en la línea de comandos.
// process.argv[0] es la ruta de Node.js.
// process.argv[1] es la ruta del archivo index.js.
// process.argv.slice(2) son los argumentos ingresados por el usuario.
//node          index.js              registrar Benito "2 años" perro blanco vomitos
//[0-Exec path] [1-file-path]         [2-Argumentos]
//                                       [0]      [1]     [2]   [3]    [4]     [5]

//Importo funciones desde el archivo ./operaciones
const { registrarCita, mostrarCitas } = require('./operaciones');

// Obtener la posicion (2-Argumentos) donde están los argumentos
const args = process.argv.slice(2);

// Obtengo el comando ingresado (registrar/leer)
const comando = args[0];

if (comando === 'registrar')
{
    // Comprobar que se han pasado suficientes argumentos para registrar una cita
    if (args.length < 6)
    {
        console.log('Por favor,ingresar los siguientes datos:');
        console.log('Nombre, Edad, Tipo de animal, Color y Enfermedad.');
    }
    else
        {
            // Extraer datos del comando
            const nombre = args[1];
            const edad = args[2];
            const tipo = args[3];
            const color = args[4];
            const enfermedad = args[5];
            registrarCita(nombre, edad, tipo, color, enfermedad);
        }
}
else
    if (comando === 'leer')
    {
        mostrarCitas();
    }
    else
        {
            console.log('Comando no reconocido.');
        }