var gulp = require('gulp'),
    paths = require('../config').paths;

// Runs the build task if there are any changes to source files

gulp.task('watch', ['browserSync', 'build'], function() {
    gulp.watch(paths.src.css, ['build']);
    gulp.watch(paths.src.template, ['build']);
    gulp.watch(paths.src.partials, ['build']);
    gulp.watch(paths.src.img, ['build']);
});
