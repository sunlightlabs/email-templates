var gulp = require('gulp'),
    paths = require('../config').paths;

gulp.task('watch', ['connect'], function () {
  gulp.watch([paths.template, paths.partials]).on('change', function () {
    console.log('you made a change to a template');
    gulp.run('includePartials');
  });
});
