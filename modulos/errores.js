console.clear()
function otraFuncion() {
  return serompe()
}

function serompe() {
  return 3 + z
}

function seRompeAsincrona(cb) {
  setTimeout(function () {
    try {
      return 3 + Z
    } catch (err) {
      console.error('Error en mi funcion asincrona')
      cb(err)
    }
  })
}

try {
  seRompeAsincrona(function () {
    console.log('Hay error')
  })
} catch (err) {
  console.error('Vaya que se ah roto')
  console.error(err.message)
  console.log('pero no pasa nada, lo hemos capturado')
}

console.log('Esto de aqui es el final')
