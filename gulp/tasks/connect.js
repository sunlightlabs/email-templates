var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', connect.server({
    root: ['dist'],
    port: 4000
}));