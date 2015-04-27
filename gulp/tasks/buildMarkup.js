var gulp = require('gulp'),
    del = require('del'),
    paths = require('../config').paths,
    fileinclude = require('gulp-file-include');

// Builds template markup with header and footer, outputs to build/templates

gulp.task('buildMarkup', function () {
    return del([paths.build.templateDir], function () {
        return gulp.src(paths.src.template)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(paths.build.templateDir));
    });
});
