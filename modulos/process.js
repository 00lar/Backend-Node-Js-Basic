console.clear()
const process = require("process")

//cuando se cierra el programa
process.on("exit", () => {
    console.log("El proceso acabo");
    setTimeout(() => {
        console.log("Esto nunca se va a ver")
    },0)
})


//antes de que se cierre
process.on("beforeExit", () => {
    console.log("El proceso va a terminar")
})

//si se nos olvido declarar un error
process.on("uncaughtException", (err, origen) => {
    console.error("Vaya, se nos ah olvidado capturar un error")
    console.error(err)
})

funcionQueNoExiste()
