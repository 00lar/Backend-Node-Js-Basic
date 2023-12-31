const gulp = require("gulp")
const server = require("gulp-server-livereload")

gulp.task("build", function(cb) {
    console.log("Construyendo un sitio")
    setTimeout(cb, 2000)
})

gulp.task("serve", function(cb) {
    gulp.src("www")
        .pipe(server({
            livereload: true,
            open: true
        }))
})

gulp.task("default", gulp.series("build", "serve"))