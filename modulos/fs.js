const { writeFile, readFile, unlink } = require('fs/promises')

async function writeToFile(fileName, data) {
  try {
    await writeFile(fileName, data)
    console.log(`wrote data to ${fileName} `)
  } catch (err) {
    console.log(`Got an error trying to write the file: ${err.message}`)
  }
}

async function ReadAFile(fileName) {
  try {
    const data = await readFile(fileName)
    console.log(data.toString())
  } catch (err) {
    console.log(err)
  }
}

async function deleteArch(fileName) {
  try {
    await unlink(fileName)
  } catch (err) {
    console.error(err)
  }
}

deleteArch(__dirname + '/archivo1.txt')
// ReadAFile(__dirname + '/archivo1.txt')
// writeToFile(__dirname + '/archivo1.txt', 'Este es mi nuevo archivo perros')

// function leer(ruta, callback) {
//   fs.readFile(ruta, (err, data) => {
//     console.log(data.toString())
//   })
// }

// function escribir(ruta, contenido, callback) {
//   fs.writeFile(ruta, contenido, function (err) {
//     if (err) {
//       console.log('No eh podido escribirlo')
//     } else {
//       console.log('Se ah escribido correctamente')
//     }
//   })
// }

// function borrar(ruta, callback) {
//   fs.unlink(ruta, callback)
// }

// // escribir(__dirname + '/archivo.txt', 'soy un archivo', console.log)
// // leer(__dirname + '/archivo.txt', console.log(leer))
// borrar(__dirname + '/archivo.txt', console.log)
