function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log("Hola " + nombre);
        miCallback(nombre);
    },5000)
}

function adios (nombre, otroCallback) {
    setTimeout( function() {
        console.log("Adios " + nombre)
        otroCallback()
    }

    )
}

console.log("Inciando proceso...")
    hola("daniel",function(nombre) {
    adios(nombre, function() {
        console.log("Proceso terminado")
    })
})