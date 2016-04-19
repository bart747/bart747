var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var coffee = require('gulp-coffee');
var coffeelint = require('gulp-coffeelint');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');

        
// sass => css
gulp.task('sass-css', function() {
  return gulp.src('sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('css'));
});

// minify css
gulp.task('minify-css', ['sass-css'], function() {
  return gulp.src('css/*.css')
    .pipe(minifyCss({compatibility: 'ie9'}))
    .pipe(gulp.dest('css/dist'));
});

// coffeescript 
gulp.task('coffee', function() {
  return gulp.src('js/coffee/*.coffee')
    .pipe(coffeelint())
    .pipe(coffeelint.reporter())
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./js/myscripts/coffee'));
});

// js
gulp.task('js', function() {
  return gulp.src('js/*.js')
    .pipe(jshint({
      esnext: true,
      asi: true
    }))
    .pipe(jshint.reporter('default'))
    .pipe(babel())
    .pipe(gulp.dest('js/babel'));
});

// script compression
gulp.task('compress', ['js'], function() {
  return gulp.src(['js/plugins/*.js', 'js/babel/*.js', 'js/coffee/*.js'])
    .pipe(sourcemaps.init())
      .pipe(uglify())  
      .pipe(concat('all.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('js/dist'));
});

// serve
gulp.task('serve', function() {

  browserSync.init({
    server: {
      baseDir: ""  
    }
  });

  gulp.watch('./sass/*.scss', ['sass-css', 'minify-css'])
    .on('change', browserSync.reload);
  gulp.watch('./js/coffee/*.coffee', ['coffee'])
    .on('change', browserSync.reload);
  gulp.watch('./js/*.js', ['js', 'compress'])
    .on('change', browserSync.reload);
});

// watch
gulp.task('watch', function() {
  gulp.watch('./sass/*.scss', ['sass-css', 'minify-css']);
  gulp.watch('./js/coffee/*.coffee', ['coffee']);
  gulp.watch('./js/*.js', ['js', 'compress']);
});

// default
gulp.task('default', ['serve']);
