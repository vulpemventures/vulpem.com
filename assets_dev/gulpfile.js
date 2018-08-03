/*global require*/
var WORK_OUT_FOLDER = require('../config.json').WORK_OUT_FOLDER;

var gulp        = require('gulp'),
    plumber     = require('gulp-plumber'),
    size        = require('gulp-filesize'),
    spritesmith = require('gulp.spritesmith'),
    imagemin    = require('gulp-imagemin'),
    pngquant    = require('imagemin-pngquant'),
	buffer      = require('vinyl-buffer'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS   = require('gulp-minify-css'),
    babel       = require('gulp-babel'),
    concat      = require('gulp-concat'),
    rename      = require('gulp-rename'),
    sass        = require('gulp-sass'),
    uglify      = require('gulp-uglify'),
    browserSync = require('browser-sync').create();


gulp.task('js', function () {
    "use strict";

    return gulp.src(['./js/**/*.js'])
        .pipe(plumber())
        .pipe(babel())
        .pipe(concat('main.js'))
        .pipe(gulp.dest(WORK_OUT_FOLDER + 'js/'))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(WORK_OUT_FOLDER + 'js'))
        .pipe(size());
});

gulp.task('vendors', function () {
    "use strict";

    gulp.src([
        './node_modules/slick-carousel/slick/slick.css',
        './node_modules/bulma/css/bulma.css',
    ])
        .pipe(concat('vendors.css'))
        .pipe(gulp.dest(WORK_OUT_FOLDER + 'css'))
        .pipe(rename('vendors.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest(WORK_OUT_FOLDER + 'css'));

    gulp.src([
        './node_modules/slick-carousel/slick/slick.js',
    ])
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest(WORK_OUT_FOLDER + 'js'))
        .pipe(rename('vendors.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(WORK_OUT_FOLDER + 'js'));

});


gulp.task('serve', ['scss-to-css'], function() {
    browserSync.init({
        server: WORK_OUT_FOLDER
    });
    gulp.watch("./scss/*.scss", ['scss-to-css']);
    gulp.watch('./js/**/*.js', ['js']);
    gulp.watch(WORK_OUT_FOLDER + "css/*.css").on('change', browserSync.reload);
    gulp.watch(WORK_OUT_FOLDER + "js/*.js").on('change', browserSync.reload);
    gulp.watch(WORK_OUT_FOLDER + "*.html").on('change', browserSync.reload);
});

gulp.task("scss-to-css", function () {
    "use strict";

    var stream = gulp.src("./scss/style.scss")
        .pipe(sass())
        .pipe(gulp.dest(WORK_OUT_FOLDER + 'css'))
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(rename({suffix: ".min"}))
        .pipe(minifyCSS())
        .pipe(gulp.dest(WORK_OUT_FOLDER + 'css'));
});

gulp.task('watch', function () {
    "use strict";

    gulp.watch('./scss/**/*.scss', ['scss-to-css']);
    gulp.watch('./scss/components/**/*.scss', ['scss-to-css']);
    gulp.watch('./scss/lib/components/**/*.scss', ['scss-to-css']);
    gulp.watch('./js/**/*.js', ['js']);
});

gulp.task('default', ['watch']);