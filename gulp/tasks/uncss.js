var gulp = require('gulp');
var uncss = require('gulp-uncss');

// Uncss: Remove unused CSS from template
// WIP

gulp.task('uncss', ['buildMarkup'], function() {
    return gulp.src('./dist/css/test.css')
    .pipe(uncss({
        html: ['./dist/css/test.css']
    }))
});