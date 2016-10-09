var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');


// sass => css
gulp.task('sass-css', function() {
  return gulp.src('_sass/main.scss')
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


// serve
gulp.task('serve', function() {

  browserSync.init({
    server: {
      baseDir: "_site"
    }
  });

  gulp.watch('./_scss/*.scss', ['sass-css', 'minify-css'])
    .on('change', browserSync.reload);
});

// watch
gulp.task('watch', function() {
  gulp.watch('./_sass/*.scss', ['sass-css', 'minify-css']);
});

// default
gulp.task('default', ['watch']);
