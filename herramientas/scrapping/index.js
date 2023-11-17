const puppeteer = require("puppeteer");


(async () => {
    console.log("Lanzamos navegador!");
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://es.wikipedia.org/wiki/Beabadoobee");

    var titulo = await page.evaluate(() => {
        const h1 = document.querySelector("h1")
        console.log(h1.innerHTML)

        return h1.innerHTML
    })

    var description = await page.evaluate(() => {
        const p = document.querySelector("p")   
        console.log(p.innerHTML)
        return p.innerHTML
    })
  
    console.log(titulo)
    console.log(description)

    console.log("Cerramos navegador....");
    browser.close();
    console.log("Navegador cerrado");
  })();