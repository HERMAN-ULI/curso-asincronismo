const promise = new Promise(function (resolve, reject) {});

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('¡Hola, mundo!');
  }, 1000);
});

promesa.then((mensaje) => {
  console.log(mensaje); // "¡Hola, mundo!"
});

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('¡Hola, mundo!');
    reject(new Error('¡Algo salió mal!'));
  }, 1000);
});

promesa.then(
  (valor) => {
    console.log(valor); // Este código no se ejecutará
  },
  (error) => {
    console.log(error.message); // "¡Algo salió mal!"
  }
);

//ejemplo de contar vacas
const cows = 15; //valor inicial de vacas

const countCows = new Promise(function (resolve, reject) {
  //solo si el número de vacas supera 10, se llama al resolve
  //de lo contrario: se llama a reject
  if (cows > 27) {
    resolve(`We have ${cows} cows on the farm`);
  } else {
    reject('There is no cows on the farm');
  }
});

//con solo .then se obtiene el resultado de la promesa de acuerdo a resolve o reject
//con .catch podemos obtener más información de un futuro error que se presente
//con .finally podemos imprimir un mensaje que indica que ya se ejecutó la promesa
countCows
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log('Finally'));
//se usan arrow function () =>

const aprobado = 6;
const prop = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (aprobado >= 7) {
      resolve(`no fuiste aprobado`);
    } else {
      reject('fuiste aprobado');
    }
  });
});

prop
  .then((valor) => {
    console.log(valor); // "¡Hola, mundo!"
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log('terminado'));
