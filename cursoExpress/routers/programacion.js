const express = require('express');

const routerProgramacion = express.Router();

const {programacion} = require('../datos/cursos.js').infoCursos;


routerProgramacion.get('/', (req, res) => {
    res.send(JSON.stringify(programacion));
  });
  
  //Cursos de programación por lenguaje
  routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje; //Le asignamos ese nombre al PARÁMETRO de la URL.
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje); //método de objetos de JavaScript: filter.
    
    if (resultados.length === 0 ) { //Esto es por si no se encontraron resultados del lenguaje escrito
      return res.status(404).send(`No se encontraron cursos de ${lenguaje}`); //res tiene un método llamado "status" que permite agregarlo de esta forma
    }  
  
    //console.log(req.query.ordenar); //Esto es para parámetros Query. Yo le puedo dar un valor con un formato clave=valor (url?clave=valor)
  
    if (req.query.ordenar ==='vistas') {
      return res.send(JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas))) //Método "Sort" que también hay que aprender. De esta forma, el orden va a ser ascendente.
    } //Debería hacerse esto de ordenar como una función con un scope global para que se tome desde cualquier ruta.
  
    res.send(JSON.stringify(resultados));
  })
  
  //Cursos de programación por lenguaje y nivel
  
  routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje; 
    const nivel = req.params.nivel;
  
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);
  
    if (resultados.length === 0) {
      return res.status(404).send(`No se encontraron cursos del lenguaje "${lenguaje}", del nivel "${nivel}"`)
    }
    res.send(JSON.stringify(resultados));
  })

  module.exports = routerProgramacion;