const readline = require('readline-sync');

// Lista de tareas
const tasks = [];

function addTarea(){
    console.log(' ');
    const addTareas = readline.question('Anade una tarea: ');
    tasks.push({addTareas, completado: false});
}

function mostrarTarea(){
    console.log(' ');
    console.log(" Tareas: ");
    tasks.map((tasks, index)=>{//recorro todo el array para mostrar tareas
        const statusTarea = tasks.completado ? 'Completada: ' : 'No Completada: '
        console.log(`${index + 1}. ${statusTarea} ${tasks.addTareas}`);
        console.log(' ');
    });
}

function eliminarTarea(){
    mostrarTarea();//Muestro todas las tareas
    console.log(' ');
    const indiceTarea =  readline.question('Que tarea quiere eliminar: ');
    console.log(' ');
    if (indiceTarea >= 0 && indiceTarea < tasks.length) {//si el indice es mayor a 0 y esta dentro del lenght de task entra
        tasks.splice(indiceTarea, 1);
        console.log("Tarea Elimnada");
    }else{
        console.log("Tarea no encontrada");
    }
}

function completarTarea(){
    mostrarTarea();
    console.log(' ');
    const indiceTarea =  readline.questionInt('Que tarea quiere completar: ') - 1;
    console.log(' ');
    if(indiceTarea >= 0 && indiceTarea< tasks.length){
        tasks[indiceTarea].completado = true;
        console.log("Tarea marcada como completa");
    }else{
        console.log("no entra ?");
    }
}

function main() {
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

        const opciones = readline.questionInt('selecione una Opcion: ');
        console.log(' ');

        switch(opciones){
            case 1:
                addTarea();
                break;
            case 2:
                mostrarTarea();
                break;
            case 3:
                eliminarTarea();
                break;
            case 4:
                completarTarea();
                break;
            case 5:
                return;
        }
    }
}

main();