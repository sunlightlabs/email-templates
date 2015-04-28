var gulp = require('gulp');
    del = require('del'),
    paths = require('../config').paths,
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    replace = require('gulp-replace'),
    LOCAL_URL = '../img/',
    AWS_URL = 'https://sunlight-cdn.s3.amazonaws.com/emails/';

// Runs templates through inliner, replace image paths and outputs to dist
// Publishing images is a separate task for now

gulp.task('publish', function() {
    return del([paths.dist], function () {
        return gulp.src(paths.build.template)
        .pipe(premailer())
        .pipe(replace(LOCAL_URL, AWS_URL))
        .pipe(gulp.dest(paths.dist))
        .pipe(reload({stream:true}));
    });
});