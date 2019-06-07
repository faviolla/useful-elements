'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    cleanCss = require('gulp-clean-css'),
    prefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    sourcemaps = require('gulp-sourcemaps');

var path = {
    build: {
        css: 'src/css'
    },
    src: {
        style: ['src/**/*.scss']
    },
    watch: {
        style: 'src/**/*.scss'
    },
    clean: './build'
};

var config = {
    server: {
        baseDir: "./src"
    },
    tunnel: false,
    host: 'localhost',
    port: 9000,
    logPrefix: "test"
};



gulp.task('webserver', ['style:build'], function () {
    browserSync(config);
    gulp.watch([path.watch.style], ['style:build']);
});

gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({
            sourceMap: true,
            errLogToConsole: true
        }))
        .pipe(prefixer({
            browsers: [
                'ie >= 10',
                'ie_mob >= 10',
                'ff >= 30',
                'chrome >= 34',
                'safari >= 7',
                'opera >= 23',
                'ios >= 6',
                'android >= 4.4',
                'bb >= 10'
            ],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(cleanCss())
        .pipe(plumber.stop())
        .pipe(gulp.dest(path.build.css))
        .pipe(browserSync.stream());
});


gulp.task('build', [
    'style:build'
]);


gulp.task('watch', function () {
    gulp.watch([path.watch.style], function (event, cb) {
        gulp.start('style:build');
    });
});


gulp.task('default', ['build', 'webserver', 'watch']);