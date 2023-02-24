//Esta constante es solo para fines didácticos.
const promesaCumplida = false;

//Se crea una instancia del objeto Promise. resolve y reject ya están definidos.
//Cuando resuelva, va a ganar el valor "¡Promesa cumplida!". En el reject, se pasa "promesa rechazada".
const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (promesaCumplida) {
      resolve('¡Promesa cumplida!');
    }
    reject('Promesa rechazada.');
  }, 3000)
});

//Acá se toma como argumento el valor puesto dentro de resolve(). 
// miPromesa.then((valor) => {
//   console.log(valor);
// });

const manejarPromesaCumplida = (valor) => console.log(valor);
const manejarPromesaRechazada = (razonRechazo) => console.log(razonRechazo);

//Anteriormente solo se pasó como argumento el primer callback. Acá, vamos a pasar ambos (res y rej).
miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);