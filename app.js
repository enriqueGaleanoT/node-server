const readline = require('readline-sync');

// Lista de tareas
const tasks = [];

function addTarea() {
    return new Promise((resolve, reject) => {
        console.log(' ');
        const addTareas = readline.question('Anade una tarea: ');
        console.log('Cargando....')
        setTimeout(() => {
            tasks.push({ addTareas, completado: false });
            resolve(addTareas);
        }, 3000);
    });
}

async function addTareaAsync() {
    try {
        let miTareaAsync = await addTarea();
        console.log('Tarea anadida: ' + miTareaAsync);
    } catch (error) {
        console.error(error);
    }
}

function mostrarTarea() {
    console.log(' ');
    console.log(" Tareas: ");
    tasks.forEach((task, index) => {
        const statusTarea = task.completado ? 'Completada: ' : 'No Completada: ';
        console.log(`${index + 1}. ${statusTarea} ${task.addTareas}`);
        console.log(' ');
    });
}

function eliminarTarea() {
    return new Promise((resolve, reject) => {
        mostrarTarea();
        console.log(' ');
        const indiceTarea = readline.question('Que tarea quiere eliminar: ');
        console.log(' ');

        if (indiceTarea >= 0 && indiceTarea < tasks.length) {
            tasks.splice(indiceTarea, 1);
            resolve('Tarea Eliminada');
        } else {
            reject('Tarea no encontrada');
        }
    });
}

function completarTarea() {
    return new Promise((resolve, reject) => {
        mostrarTarea();
        console.log(' ');
        const indiceTarea = readline.questionInt('Que tarea quiere completar? ') - 1;
        console.log(' ');

        if (indiceTarea >= 0 && indiceTarea < tasks.length) {
            tasks[indiceTarea].completado = true;
            resolve('Tarea marcada como completa');
        } else {
            reject('Tarea no encontrada');
        }
    });
}

async function main() {
    while (true) {
        console.log('Opciones ');
        console.log(' ');
        console.log('1. Anadir Tarea ');
        console.log(' ');
        console.log('2. Mostrar Tareas ');
        console.log(' ');
        console.log('3. Eliminar Tarea ');
        console.log(' ');
        console.log('4. Completar Tareas ');
        console.log(' ');
        console.log('5. Salir ');
        console.log(' ');

        const opciones = readline.questionInt('Seleccione una Opcion: ');
        console.log(' ');

        switch (opciones) {
            case 1:
                await addTareaAsync();
                console.log('Tarea anadida exitosamente');
                break;
            case 2:
                mostrarTarea();
                break;
            case 3:
                try {
                    const message = await eliminarTarea();
                    console.log(message);
                } catch (error) {
                    console.error('Error al eliminar tarea:', error);
                }
                break;
            case 4:
                try {
                    const message = await completarTarea();
                    console.log(message);
                } catch (error) {
                    console.error('Error al completar tarea:', error);
                }
                break;
            case 5:
                return;
        }
    }
}

main();
