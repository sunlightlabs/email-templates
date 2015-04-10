var gulp = require('gulp'),
    paths = require('../config').paths;

// Runs the build task if there are any changes to source files

gulp.task('watch', ['browserSync'], function() {
    gulp.watch(paths.css, ['build']);
    gulp.watch(paths.template, ['build']);
    gulp.watch(paths.partials, ['build']);
    gulp.watch(paths.img, ['build']);
});
