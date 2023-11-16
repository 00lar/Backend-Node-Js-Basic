const sharp = require("sharp")

sharp("slider3.jpg")
    .resize(200)
    .grayscale()
    .toFile("resized.jpg")