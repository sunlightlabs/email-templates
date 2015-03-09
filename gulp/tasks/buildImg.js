var gulp = require('gulp'),
    paths = require('../config').paths,
    imagemin = require('gulp-imagemin');

gulp.task('buildImg', function () {
    return gulp.src(paths.img)
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest(paths.dist.img));
});
