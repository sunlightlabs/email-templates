var gulp = require('gulp');
    paths = require('../config').paths,
    premailer = require('gulp-premailer'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

// Build inlined templates, outputs to /inlined

gulp.task('build', ['buildCss', 'buildMarkup', 'buildImg'], function() {
    return gulp.src(paths.dist.template)
    .pipe(premailer())
    .pipe(gulp.dest(paths.inlined))
    .pipe(reload({stream:true}));
});
