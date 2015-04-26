var gulp = require('gulp'),
    paths = require('../config').paths,
    awspublish = require('gulp-awspublish'),
    fs = require('fs'),
    credentials = JSON.parse(fs.readFileSync('./aws.json', 'utf8')),
    rename = require("gulp-rename");
 
gulp.task('uploadImg', function () {
    var publisher = awspublish.create(credentials),
        headers = {
            'Cache-Control': 'max-age=315360000, no-transform, public'
        };
    
    return gulp.src(paths.build.img)
    .pipe(rename(function (path) {
        path.dirname = 'emails/' + path.dirname;
    }))
    .pipe(publisher.publish(headers))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter({
        states: ['create', 'update', 'delete']
    }));
});
