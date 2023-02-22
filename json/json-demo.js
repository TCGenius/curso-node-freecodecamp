// const curso = require('./curso.json');

// console.log(curso);

//Node ya lo convierte en un objeto de JavaScript, sin necesidad de hacer nada.

let infoCurso = {
  titulo: "Aprende Node.js",
  numVistas: 654649,
  numLikes: 12312,
  temas: [
    "JavaScript",
    "Node.js"
  ],
  esPublico: true
};
//JSON.stringify() convierte en string con formato JSON un objeto de JS.
let infoCursoJSON = JSON.stringify(infoCurso);
console.log(infoCursoJSON);
//JSON.parse() convierte en objeto de JS un string con formato JSON.
let infoCursoJSONJS = JSON.parse(infoCursoJSON);
console.log(infoCursoJSONJS);