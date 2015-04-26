module.exports = {
    paths: {
        src: {
            template: 'src/template/*.html',
            partials: 'src/partials/*.html',
            css: 'src/css/*.css',
            img: 'src/img/**/*'
        },
        build: {
            template: 'build/template/*.html',
            templateDir: 'build/template/',
            cssDir: 'build/css/',
            imgDir: 'build/img/',
            img: 'build/img/**/*'
        },
        dist: 'dist/'
    }
};
