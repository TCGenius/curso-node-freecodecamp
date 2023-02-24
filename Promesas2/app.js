//En vez de definir constantes, vamos a crear funciones con nombre, que van a retornar una promesa.
function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando: ${producto} de freeCodeCamp.`);
    setTimeout(() => {
      if (producto === 'taza') {
        resolve('Ordenando una taza con el logo de freeCodeCamp');
      } else {
        reject('Este producto no está disponible actualmente');
      }
    }, 2000);
  });
};

function procesarPedido(respuesta) {
  return new Promise(resolve  => { //Notar que solo se usa Resolve, así que no va entre paréntesis.
    console.log('Procesando respuesta...');
    console.log(`La respuesta fue: "${respuesta}"`);
    setTimeout(() => {
      resolve('Gracias por tu compra. Disfruta tu producto de freeCodeCamp.');
    }, 4000);
  });
};

// a//Chaining Promises.. Sirve para "encadenar" los procesos asíncronos de forma que sean más predecibles.
// ordenarProducto('taza')
//   .then(respuesta => {
//     console.log('Respuesta recibida');
//     console.log(respuesta);
//     return procesarPedido(respuesta);
//   }) //Esto último retorna una promesa, por eso se puede volver a usar el método .then
//   .then(respuestaProcesada => {
//     console.log(respuestaProcesada);
//   })
//   .catch(error => {
//     console.log(error);
//   });

//Usamos async y await para usar promises como argumentos. Sirve para ejecutar procesos asíncronos como síncronos. Las async devuelven una Promise.
async function realizarPedido(producto) {
  try {
    const respuesta = await ordenarProducto(producto);
    console.log('Respuesta recibida');
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
  } catch (error) {
    console.log(error);
  }
}

realizarPedido('taza');