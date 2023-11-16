console.clear()
let buffer = Buffer.alloc(4)
let buffer2 = Buffer.from([1, 2, 5])
let buffer3 = Buffer.from('hola')

console.log(buffer2)

//me regresa el mensaje en binario
console.log(buffer3)
//lo convierte a texto normal
console.log(buffer3.toString())

let abc = Buffer.alloc(26)

for (let i = 0; i < 26; i++) {
  abc[i] = i + 97
}

console.log(abc.toString())
