/*global require*/
const {
  STYLE_GUID_FOLDER,
  WORK_OUT_FOLDER,
  PROD_FOLDER
} = require('./config.json');

const exec = require('child_process').exec;
//Gulp related dependencies
const gulp      = require('gulp'),
  gulpif        = require('gulp-if'),
  sass          = require('gulp-sass'),
  babel         = require('gulp-babel'),
  rename        = require('gulp-rename'),
  concat        = require('gulp-concat'),
  uglify        = require('gulp-uglify'),
  useref        = require('gulp-useref'),
  plumber       = require('gulp-plumber'),
  imagemin      = require('gulp-imagemin'),
  size          = require('gulp-filesize'),
  gulpStylelint = require('gulp-stylelint'),
  minifyCSS     = require('gulp-minify-css'),
  autoprefixer  = require('gulp-autoprefixer'),
  browserSync   = require('browser-sync').create();


gulp.task('styleguid', () => 
  exec(`node_modules/styledown/bin/styledown public/styleguid/config.md > public/styleguid/styleguide.html`))

gulp.task('js', () => {
  'use strict';

  const js = gulp.src([WORK_OUT_FOLDER + 'js/main.js'])
    .pipe(plumber())
});

gulp.task('vendors', () => {
  'use strict';

  const vendor_css = gulp.src([
    './node_modules/slick-carousel/slick/slick.css',
    './node_modules/@fortawesome/fontawesome-free/css/all.css'
  ])
    .pipe(concat('vendors.css'))
    .pipe(gulp.dest(WORK_OUT_FOLDER + 'css'));

  const vendor_js = gulp.src([
    './src/js/particles.js',
    './src/js/particles.config.js',
    './node_modules/jquery/dist/jquery.js',
    './node_modules/slick-carousel/slick/slick.js',
    './node_modules/@fortawesome/fontawesome-free/js/all.js'
  ])
    .pipe(babel())
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest(WORK_OUT_FOLDER + 'js'));
});

gulp.task('images', () => {
  return gulp.src(WORK_OUT_FOLDER + 'images/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(imagemin())
    .pipe(gulp.dest(PROD_FOLDER + 'images'))
});

gulp.task('fonts', () => {
  return gulp.src(WORK_OUT_FOLDER + 'fonts/*.*')
    .pipe(gulp.dest(PROD_FOLDER + 'fonts'))
});

gulp.task('lint-css', () => {
  return gulp.src('src/**/*.scss')
    .pipe(gulpStylelint({
      reporters: [
        { formatter: 'string', console: true }
      ],
      debug: true
    }));
});

gulp.task('scss-to-css', ['lint-css'], () => {
  'use strict';

  const scss = gulp.src(WORK_OUT_FOLDER + 'scss/style.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 10 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(WORK_OUT_FOLDER + 'css'));
});

gulp.task('serve', ['scss-to-css', 'vendors'], () => {
  browserSync.init({
    server: [WORK_OUT_FOLDER,STYLE_GUID_FOLDER]
  });
  gulp.watch(WORK_OUT_FOLDER + 'css/*.css').on('change', browserSync.reload);
  gulp.watch(WORK_OUT_FOLDER + 'js/*.js').on('change', browserSync.reload);
  gulp.watch(WORK_OUT_FOLDER + '*.html').on('change', browserSync.reload);
  gulp.watch(STYLE_GUID_FOLDER + '*.html').on('change',() => setTimeout(browserSync.reload, 3000));
});

gulp.task('watch', ['serve'], () => {
  'use strict';

  gulp.watch(WORK_OUT_FOLDER + 'scss/**/*.scss', ['scss-to-css']);
  gulp.watch(WORK_OUT_FOLDER + 'scss/components/**/*.scss', ['scss-to-css']);
  gulp.watch(WORK_OUT_FOLDER + 'scss/lib/components/**/*.scss', ['scss-to-css']);
  gulp.watch(WORK_OUT_FOLDER + 'js/**/*.js', ['js']);
  gulp.watch(STYLE_GUID_FOLDER + '**/*.md', ['styleguid']);
  gulp.watch(STYLE_GUID_FOLDER + '**/*.css', ['styleguid']);
});

gulp.task('default', ['watch']);

gulp.task('bundle', ['scss-to-css', 'vendors', 'images', 'fonts'], () => {
  return gulp.src([WORK_OUT_FOLDER + '*.html'])
    .pipe(useref())
    .pipe(gulpif('main.js', uglify()))
    .pipe(gulpif('*.css', minifyCSS()))
    .pipe(gulp.dest(PROD_FOLDER))
    .pipe(size());
});
