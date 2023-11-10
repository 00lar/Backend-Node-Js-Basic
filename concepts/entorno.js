let nombre = process.env.NOMBRE || "Sin nombre"
let web = process.env.WEB || "No tengo web"

console.log("Hola " + nombre )
console.log("Mi web es " + web);

/*
para asignar variables en power shell:
Para ingresar las variables con PowerShell primero hay que definirlas escribiendo:

$env:NOMBRE="Carlos"
Una vez definido ejecutan el comando-

node conceptos/entorno.js
*/