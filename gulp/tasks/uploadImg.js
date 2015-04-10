// var gulp = require('gulp'),
//     paths = require('../config').paths,
//     s3 = require('gulp-s3'),
//     fs = require('fs'),
//     aws = JSON.parse(fs.readFileSync('./aws.json'));

// gulp.task('publish', function () {
//   gulp.src(paths.dist.img, { read: false })
//     .pipe(s3(aws, {
//       uploadPath: 'emails/' + '/img/',
//       delay: 1000
//     }));
// });





// var gulp = require('gulp'),
//     paths = require('../config').paths,
//     s3 = require('gulp-s3'),
//     fs = require('fs'),
//     aws = JSON.parse(fs.readFileSync('./aws.json'));

// gulp.task('uploadImg', function () {
//     gulp.src(paths.dist.img, { read: false })
//     .pipe(s3(aws, {
//         // uploadPath: 'emails/' + '/img/'
//         uploadPath: 'emails/' + '/img/'
//         // delay: 1000
//     }));
// });


var gulp = require('gulp'),
    paths = require('../config').paths,
    awspublish = require('gulp-awspublish'),
    fs = require('fs'),
    credentials = JSON.parse(fs.readFileSync('./aws.json', 'utf8'));

gulp.task('uploadImg', function () {
    var publisher = awspublish.create(credentials),
        headers = {
            'Cache-Control': 'max-age=315360000, no-transform, public'
        },
        path = 'emails/';
    
    return gulp.src(paths.dist.img)
    .pipe(awspublish.gzip({ ext: '.gz' }))
    .pipe(publisher.publish(headers, path))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter({
        states: ['create', 'update', 'delete']
    }));
});
