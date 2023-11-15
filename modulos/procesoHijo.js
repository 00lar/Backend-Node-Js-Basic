console.clear()
const { exec, spawn } = require('child_process')

exec('dir', (err, stdout, sterr) => {
  if (err) {
    console.error(err)
    return false
  }
  console.log(stdout)
})

// exec('node modulos/consola.js', (err, stdout, sterr) => {
//   if (err) {
//     console.error(err.message)
//     return false
//   }
//   console.log(stdout)
// })

let proceso = spawn('ls', ['-la'])
console.log(proceso.pid)

proceso.stdout.on('Data', function (dato) {
  console.log('Esta muerto?')
  console.log(dato.toString())
})

proceso.on('exit', function () {
  console.log('El proceso termino')
  console.log(proceso.killed)
})
