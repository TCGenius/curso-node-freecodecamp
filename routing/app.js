const http = require('http');
const {infoCursos} = require('./cursos');

const servidor = http.createServer((req, res) => {
  const {method} = req;
  switch(method) {
    case 'GET':
      return manejarSolicitudGet(req, res);
    case 'POST':
      return manejarSolicitudPost(req, res);
    default:
      res.statusCode = 501;
      res.end(`El método usado no puede ser manejado por el servidor: ${method}`);
  }
});

function manejarSolicitudGet(req, res) { //200 OK por defecto
  const path = req.url;

  if(path === '/') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    return res.end('<h1>Bienvenidos a mi primer servidor y API creados con Node.js</h1>')
  } else if (path === '/cursos') {
    return res.end(JSON.stringify(infoCursos));
  } else if ( path === '/cursos/programacion') {
    return res.end(JSON.stringify(infoCursos.programacion))
  }
  res.statusCode = 404;
  res.end('El recurso solicitado no existe');
}

function manejarSolicitudPost(req, res) {
  const path = req.url
  if(path === '/cursos/programacion') {
    let cuerpo = ''; //Se asigna una variable para el body
    req.on('data', contenido => {
      cuerpo += contenido.toString();
    }); //Se suma a la variable "cuerpo" el body de la req con el evento "data" (built-in) del event listener

    req.on('end', () => {
      console.log(cuerpo);
      console.log(typeof cuerpo);
      cuerpo = JSON.parse(cuerpo); //Convertimos a objeto de JS
      console.log(typeof cuerpo);
      console.log(cuerpo.nivel);
      return res.end('El servidor recibió una solicitud POST para /cursos/programacion');
    }); //En el evento "end", vamos a mostrar el cuerpo y el tipo del mismo.
    //return res.end('El servidor recibió una solicitud POST para /cursos/programacion');
  } else {
  res.statusCode = 404;
  res.end('El recurso solicitado no existe');
  };
}

const PORT = 3000;

servidor.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
});