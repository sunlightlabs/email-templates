var gulp = require('gulp'),
    paths = require('../config').paths;

// Runs the build task if there are any changes to source files

gulp.task('watch', ['connect'], function() {
    gulp.watch(paths.css, ['build']);
    gulp.watch(paths.template, ['build']);
    gulp.watch(paths.partials, ['build']);
});
