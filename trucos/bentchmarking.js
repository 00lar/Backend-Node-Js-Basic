console.clear()
console.time("tiempo del ciclo completo")
    let suma = 0;
    console.time("bucle")
    for (let i=0; i<10000 ; i++) {
        suma += 1;
    } 
    console.timeEnd("bucle")

    console.time("bucle 2")
    let suma2 = 0;
    for (let j=0; j<10000 ; j++) {
        suma2 += 1;
    } 
    console.timeEnd("bucle 2")

    function asincrona () {
        return new Promise ((res) => {
            setTimeout(function() {
                console.log("Termina el proceso asincrono")
            })
            res()
        })
    }

    console.time("asincrono")
        asincrona()
            .then(()=> {
                console.timeEnd("asincrono")
            })
console.timeEnd("tiempo del ciclo completo")