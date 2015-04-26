var gulp = require('gulp');
    paths = require('../config').paths,
    premailer = require('gulp-premailer'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

// Runs build tasks, outputs to /build

gulp.task('build', ['buildCss', 'buildMarkup', 'buildImg']);