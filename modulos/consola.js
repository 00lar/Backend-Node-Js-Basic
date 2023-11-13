console.clear()
var tabla = [
  {
    a: 1,
    b: '2',
  },
  {
    a: 2,
    b: 'otra letra',
  },
]

console.table(tabla)

console.log(tabla)

//Group identa conversacion
function function1() {
  console.group('Funcion 1')
  console.log('Esto es de la funcion 1')
  console.log('Esto tambien')
  function2()
  console.log('Hemos vuelto a la 1')
  console.group('Funcion 1')
}

function function2() {
  console.group('function 2')
  console.log('Ahora estamos en la funcion 2')
  console.groupEnd('Function 2')
}

console.log('Empezamos')
function1()

console.count('veces')
