var gulp = require('gulp'),
    del = require('del'),
    paths = require('../config').paths,
    imagemin = require('gulp-imagemin');

// Optimizes source images, outputs to build/img

gulp.task('buildImg', function () {
    return del([paths.build.imgDir], function () {
        return gulp.src(paths.src.img)
        .pipe(imagemin({ optimizationLevel: 5 }))
        .pipe(gulp.dest(paths.build.imgDir));
    });
});
