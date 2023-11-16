console.clear()
const http = require("http")

http.createServer(router).listen(3002)

function router (req, res) {
    console.log("Nueva peticion")
    console.log(req.url)

    switch (req.url) {
        case "/hola":
            res.write("Hola, que tal")
            res.end()
            break
        default : 
            res.write("Error 404, no se lo que quieres")
            res.end()
    } 

    res.writeHead(201, {"Content-Type" : "text/plain"})

    res.write("Hola ya se usar HTTP de node")

    res.end();
}

console.log("Estas en el puerto 3002")