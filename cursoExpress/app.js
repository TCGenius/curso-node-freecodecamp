const express = require('express');
const app = express();

const {infoCursos} = require('./datos/cursos.js');

const routerMatematicas = require('./routers/matematicas.js')
const routerProgramacion = require('./routers/programacion.js')

//Routers
app.use('/api/cursos/programacion', routerProgramacion); //De esta forma, agregamos una ruta a un router

app.use('/api/cursos/matematicas', routerMatematicas);

//Routing 
app.get('/', (req, res) => {
  res.send('<h1>Mi primer servidor. Cursos 💻</h1>')
});

app.get('/api/cursos', (req, res) => {
  res.send(infoCursos);
});


const PORT = process.env.PORT || 3000; //Se va a sacar de las variables de entorno O (||) va a usar el 3000.

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}...`)
});

