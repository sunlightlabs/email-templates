var gulp = require('gulp'),
    del = require('del'),
    paths = require('../config').paths,
    fileinclude = require('gulp-file-include');

// Builds CSS from framework and override styles, outputs to build/css

gulp.task('buildCss', function () {
    return del([paths.build.cssDir], function () {
        return gulp.src(paths.src.css)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(paths.build.cssDir));
    });
});
