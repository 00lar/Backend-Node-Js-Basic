function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Hola, ' + nombre)
      resolve(nombre)
    }, 1500)
  })
}

function hablar(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Bla bla bla bla...')
      reject('Ah habido un error')
    }, 1000)
  })
}

function adios(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Adios', nombre)
      resolve()
    }, 1000)
  })
}

console.log('Iniciando el proceso...')
hola('Daniel')
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log('Procesado terminado')
  })
  .catch((error) => {
    console.error('Ah habido un error')
    console.error(error)
  })
