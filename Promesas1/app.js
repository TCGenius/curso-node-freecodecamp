const estatusPedido = () => {
  const estatus = Math.random() < 0.8;
  return estatus;
}

const miPedidoDePizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (estatusPedido()) {
      resolve('Pedido exitoso! Su pizza está en camino');
    } else {
      reject('Ocurrió un error. Por favor, intente nuevamente.')
    }
  }, 3000);
});

//Manera 1 de usar el .then()
// const pizzaAceptada = (mensajeDeConfirmacion) => console.log(mensajeDeConfirmacion);
// const pizzaRechazada = (mensajeDeError) => console.log(mensajeDeError);

// miPedidoDePizza.then(pizzaAceptada, pizzaRechazada);

//Manera 2 de usar el .then()
// miPedidoDePizza
//   .then((mensajeDeConfirmacion) => console.log(mensajeDeConfirmacion))
//   .then(null, (mensajeDeError) => console.log(mensajeDeError));

  //Uso de .catch()
  miPedidoDePizza
  .then((mensajeDeConfirmacion) => console.log(mensajeDeConfirmacion))
  .catch((mensajeDeError) => console.log(mensajeDeError));