var gulp = require('gulp'),
    fileinclude = require('gulp-file-include');

gulp.task('includePartials', function() {
  gulp.src(['src/template/test.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./dist/template'));
});