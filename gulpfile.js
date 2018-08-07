/*global require*/
const WORK_OUT_FOLDER = require('./config.json').WORK_OUT_FOLDER,
  PROD_FOLDER = require('./config.json').PROD_FOLDER,
  PROD = require('./config.json').PROD;

const gulp      = require('gulp'),
  plumber       = require('gulp-plumber'),
  size          = require('gulp-filesize'),
  buffer        = require('vinyl-buffer'),
  autoprefixer  = require('gulp-autoprefixer'),
  minifyCSS     = require('gulp-minify-css'),
  babel         = require('gulp-babel'),
  concat        = require('gulp-concat'),
  rename        = require('gulp-rename'),
  sass          = require('gulp-sass'),
  uglify        = require('gulp-uglify'),
  browserSync   = require('browser-sync').create();


gulp.task('js', function () {
  "use strict";

  const js = gulp.src([WORK_OUT_FOLDER + 'js/main.js'])
    .pipe(plumber())
  if (PROD) {
    return js
      .pipe(rename('main.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(PROD_FOLDER + 'js'))
      .pipe(size());
  }
});

gulp.task('vendors', function () {
  "use strict";

  const vendor_css = gulp.src([
    './node_modules/slick-carousel/slick/slick.css'
  ])
    .pipe(concat('vendors.css'))
    .pipe(gulp.dest(WORK_OUT_FOLDER + 'css'));

  const vendor_js = gulp.src([
    './node_modules/slick-carousel/slick/slick.js',
  ])
    .pipe(babel())
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest(WORK_OUT_FOLDER + 'js'));

  if (PROD) {
    vendor_css
      .pipe(rename('vendors.min.css'))
      .pipe(minifyCSS())
      .pipe(gulp.dest(PROD_FOLDER + 'css'));
    vendor_js
      .pipe(rename('vendors.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(PROD_FOLDER + 'js'));
  }
});


gulp.task('serve', ['scss-to-css'], function () {
  browserSync.init({
    server: WORK_OUT_FOLDER
  });
  gulp.watch(WORK_OUT_FOLDER + "css/*.css").on('change', browserSync.reload);
  gulp.watch(WORK_OUT_FOLDER + "js/*.js").on('change', browserSync.reload);
  gulp.watch(WORK_OUT_FOLDER + "*.html").on('change', browserSync.reload);
});

gulp.task("scss-to-css", function () {
  "use strict";

  const scss = gulp.src(WORK_OUT_FOLDER + "scss/style.scss")
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 10 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(WORK_OUT_FOLDER + 'css'));
  if (PROD) {
    scss
      .pipe(rename({ suffix: ".min" }))
      .pipe(minifyCSS())
      .pipe(gulp.dest(PROD_FOLDER + 'css'));
  }

});

gulp.task('watch', ['serve'], function () {
  "use strict";

  gulp.watch(WORK_OUT_FOLDER + 'scss/**/*.scss', ['scss-to-css']);
  gulp.watch(WORK_OUT_FOLDER + 'scss/components/**/*.scss', ['scss-to-css']);
  gulp.watch(WORK_OUT_FOLDER + 'scss/lib/components/**/*.scss', ['scss-to-css']);
  gulp.watch(WORK_OUT_FOLDER + 'js/**/*.js', ['js']);
});

gulp.task('default', ['watch']);

gulp.task('bundle', ['js', 'scss-to-css', 'vendors'])