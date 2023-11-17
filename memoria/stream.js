console.clear()
const fs = require("fs")

let data = ""
// estram de lecturah
let readableStream = fs.createReadStream(__dirname + "/input.txt")
readableStream.setEncoding("UTF8")

readableStream.on("data", function (chunk) {
    data += chunk;
})

readableStream.on("end", function() {
    // console.log(data)
})

// stream de escritura
// process.stdout.write("hola")
// process.stdout.write("que")
// process.stdout.write("tal")

const stream = require("stream")
const util = require("util")

const Transform = stream.Transform
function Mayus() {
    Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus)
    cb()
}

const mayus = new Mayus()

readableStream 
    .pipe(mayus)
    .pipe(process.stdout)