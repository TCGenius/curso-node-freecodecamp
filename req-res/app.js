const http = require('http');

//createServer() se utiliza para crear el servidor. Lo alojaremos en una constante.
const servidor = http.createServer((req, res) => {
    // console.log('===> req (solicitud)');
    // console.log(req.url); //Una barrita significa "home", o sea, la página principal.
    // console.log(req.method); //Método http.
    // console.log(req.headers); //Cabeceras.

    console.log('===> res (respuesta)')
    // console.log(res.statusCode); //Código de estado
    // res.statusCode = 404; //Se puede cambiar el estado
    // console.log(res.statusCode);
    res.setHeader('content-type', 'application/json'); //Setear header con par clave:valor.
    console.log(res.getHeaders());
    res.end('<h1>Hola, pa</h1>')
});

const PORT = 3000;

//Con el método listen() se puede asociar el puerto y decir qué va a pasar cuando se inicie el servidor.
servidor.listen(PORT, () => {
    console.log(`El servidor está escuchando en http://localhost:${PORT}`);
});