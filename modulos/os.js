console.clear()
const os = require('os')

console.log(os.arch())
console.log(os.platform())
//System Signals
console.log(os.constants)
console.log(os.cpus())
//amount of core
console.log(os.cpus().length)
//memory velocity
console.log(os.freemem())
// calculate free femory
const SIZE = 1024
function kb(bytes) {
  return bytes / SIZE
}
function gb(bytes) {
  return kb(bytes) / SIZE
}
function mb(bytes) {
  return mb(bytes) / SIZE
}
console.log(kb(os.freemem()))
console.log(gb(os.freemem()))

console.log(os.homedir())

console.log(os.hostname)
