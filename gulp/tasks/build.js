var gulp = require('gulp');
    paths = require('../config').paths,
    premailer = require('gulp-premailer');

// Build inlined templates, outputs to /inlined

gulp.task('build', ['buildCss', 'buildMarkup'], function() {
    return gulp.src(paths.dist.template)
    .pipe(premailer())
    .pipe(gulp.dest(paths.inlined));
});
