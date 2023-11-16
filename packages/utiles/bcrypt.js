const bcrypt = require("bcrypt")

//encriptar contraseña
const password = "1234segura!"

bcrypt.hash(password, 5, function(err, hash) {
    console.log(hash)

    bcrypt.compare(password, hash, function (err,res) {
        console.log(res)
    })
}
)