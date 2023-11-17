console.clear();
const http = require("http");

http.createServer(router).listen(3002);

function router(req, res) {
    console.log("Nueva peticion");
    console.log(req.url);

    // Set the response header before sending any data
    res.writeHead(201, { "Content-Type": "text/plain" });

    switch (req.url) {
        case "/hola":
            let saludo = hola()
            res.write(saludo);
            res.end();
            break;
        default:
            res.write("Error 404, no se lo que quieres");
            res.end();
    }

}
function hola () {
    return "Hola que tal"
}

console.log("Estas en el puerto 3002");
