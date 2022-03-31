let funcionesDeTareas = function (tareas, operacion){
    switch(operacion){

        case "listar":
            for(let i = 0; i < tareas.length; i++){
                let tarea = tareas[i]
                console.log("Tarea nº" + (i+1) +": " + tarea.titulo + ", estado: " + tarea.estado)
            }
        break;

        case undefined:
            console.log("Atención - Tienes que pasar una acción.");
        break;

        default:
            console.log("No entiendo qué quieres hacer.")
    }
}
//Exportamos la función
module.exports = funcionesDeTareas