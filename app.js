//Requerimnos el módulo process
let fs = require('fs')

//requerimos el módulo con la funciones
let funcionesDeTareas = require('./modulos/funcionesDeTareas.js')

//Leemos el archivo lista en formato JSON
let listaJSON = fs.readFileSync(__dirname + '/tareas.json','utf-8')

//Parseamos la lista para convertirla en un string
let tareas = JSON.parse(listaJSON)

//Requerimos el módulo Process
let process = require("process")

//Definimos a operacion utilizando argv de process
let operacion = process.argv[2]

//Realizamos llamado la funcion
funcionesDeTareas(tareas, operacion)

