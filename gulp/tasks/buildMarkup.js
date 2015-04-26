var gulp = require('gulp'),
    paths = require('../config').paths,
    fileinclude = require('gulp-file-include');

// Builds template markup with header and footer, output to dist/templates

gulp.task('buildMarkup', function() {
    return gulp.src(paths.src.template)
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(gulp.dest(paths.build.templateDir));
});
