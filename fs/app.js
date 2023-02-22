const fs = require('fs');
//Leer contenido de un archivo
// fs.readFile(nomArchivo[, options (por ejemplo, codificación utf-8], callback(err, data))

// fs.readFile('index.html', 'utf-8', (err, contenido) => {
//   if (err) throw err;
//   console.log(contenido);
// });

//Renombrar archivo
// fs.rename(nomArchivo, nombreNuevo, callback(err))

// fs.rename('index copy.html', 'index.html', (err) => {
//   if (err) throw err;
//   console.log('Nombre cambiado flama');
// });

//Agregar contenido al final de un archivo.
//fs.appendFile(nomArchivo, contenido, callback(err))
// fs.appendFile('index.html', '<p>Qué onda, pa</p>', (err) => {
//   if (err) throw err;
//   console.log('Cambiado flama');
// })

//Reemplazar todo el contenido del archivo.
//fs.writeFile(nomArchivo, contenidoNuevo, callback(err))
// fs.writeFile('index.html', 'Te fuiste reemplazadito, pa', (err) => {
//   if(err) throw err;
//   console.log('Se fue reemplazadito');
// })

//Eliminar archivos
//fs.unlink(nomAchivo, callback(err))
// fs.unlink('main.html', (err) => {
//   if(err) throw err;
//   console.log('Eliminadito, papi');
// })