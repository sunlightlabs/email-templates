var gulp = require('gulp'),
    paths = require('../config').paths,
    fileinclude = require('gulp-file-include');

// Builds CSS from framework and override styles, outputs to dist/css

gulp.task('buildCss', function() {
    return gulp.src(paths.src.css)
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(gulp.dest(paths.build.cssDir));
});
