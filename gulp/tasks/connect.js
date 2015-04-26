var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', connect.server({
    root: ['build'],
    port: 4000
}));