/*global require*/

var WORK_OUT_FOLDER = './src/',
    PROD = false;

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

    return gulp.src(['./src/js/**/*.js'])
        .pipe(plumber())
        .pipe(babel())
        .pipe(concat('main.js'))
        .pipe(gulp.dest(WORK_OUT_FOLDER + 'js/'))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(WORK_OUT_FOLDER + 'js'))
        .pipe(size());
});


gulp.task('serve', ['scss-to-css'], function() {

    browserSync.init({
        server: "./src"
    });

    gulp.watch("./src/scss/*.scss", ['scss-to-css']);
    gulp.watch('./src/js/**/*.js', ['js']);
    gulp.watch("./src/css/*.css").on('change', browserSync.reload);
    gulp.watch("./src/js/*.js").on('change', browserSync.reload);
    gulp.watch("./src/*.html").on('change', browserSync.reload);
});

gulp.task("scss-to-css", function () {
    "use strict";

    var stream = gulp.src("./src/scss/style.scss")
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

    gulp.watch('./src/scss/**/*.scss', ['scss-to-css']);
    gulp.watch('./src/scss/components/**/*.scss', ['scss-to-css']);
    gulp.watch('./src/scss/lib/components/**/*.scss', ['scss-to-css']);
    gulp.watch('./src/js/**/*.js', ['js']);
});

gulp.task('default', ['watch']);