// operaciones.js
const fs = require('fs');
const path = require('path');

// __dirname se usa para obtener la ruta absoluta del directorio donde está ubicado el archivo citas.json
const citasFilePath = path.join(__dirname, 'citas.json');

// Función para registrar una nueva cita
function registrarCita(nombre, edad, tipo, color, enfermedad) {
    const nuevaCita = { nombre, edad, tipo, color, enfermedad };

    // Leer las citas existentes
    const citas = leerCitas();

    // Agregar la nueva cita
    citas.push(nuevaCita);

    // Guardar el arreglo actualizado en citas.json
    fs.writeFileSync(citasFilePath, JSON.stringify(citas, null, 2), 'utf-8');

    console.log('Cita registrada exitosamente.');
}

// Función para leer y mostrar todas las citas
function leerCitas() {
    // Verificar si el archivo existe y leer su contenido
    if (fs.existsSync(citasFilePath)) {
        const data = fs.readFileSync(citasFilePath, 'utf-8');
        return JSON.parse(data);
    } else {
        return [];
    }
}

function mostrarCitas() {
    const citas = leerCitas();
    if (citas.length === 0) {
        console.log('No hay citas registradas.');
    } else {
        console.log('Citas registradas:');
        citas.forEach((cita, index) => {
                                        console.log(`\nCita #${index + 1}`);
                                        console.log(`Nombre del animal: ${cita.nombre}`);
                                        console.log(`Edad: ${cita.edad}`);
                                        console.log(`Tipo de animal: ${cita.tipo}`);
                                        console.log(`Color: ${cita.color}`);
                                        console.log(`Enfermedad: ${cita.enfermedad}`);
                                        }
                    );
    }
}

module.exports = {
    registrarCita,
    mostrarCitas,
};