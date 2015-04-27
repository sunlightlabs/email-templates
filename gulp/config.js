module.exports = {
    paths: {
        src: {
            template: 'src/template/*.html',
            partials: 'src/partials/*.html',
            css: 'src/css/*.css',
            img: 'src/img/**/*'
        },
        build: {
            templateDir: 'build/template/',
            template: 'build/template/*.html',
            cssDir: 'build/css/',
            css: 'build/css/*.css',
            imgDir: 'build/img/',
            img: 'build/img/**/*'
        },
        dist: 'dist/'
    }
};
