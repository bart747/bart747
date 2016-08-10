var gulp = require('gulp');
var babel = require('gulp-babel');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');

/*       
// js
gulp.task('js', function() {
  return gulp.src('js/myscripts/*.js')
    .pipe(jshint({
      esnext: true
      // asi: true
    }))
    .pipe(jshint.reporter('default'))
    .pipe(babel())
    .pipe(gulp.dest('./js/babel'));
});
*/

// script compression
gulp.task('js', function() {
  return gulp.src(['js/libs/*.js', 'js/plugins/*.js', './js/myscripts/*.js'])
    .pipe(jshint({
      esnext: true
      // asi: true
    }))
    .pipe(jshint.reporter('default'))
    .pipe(sourcemaps.init())
      // .pipe(uglify())  
      .pipe(concat('all.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('js/dist'));
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
  gulp.watch('./js/myscripts/coffee/*.coffee', ['coffee'])
    .on('change', browserSync.reload);
  gulp.watch('./js/myscripts/*.js', ['js'])
    .on('change', browserSync.reload);
});

// watch
gulp.task('watch', function() {
  gulp.watch('./_sass/*.scss', ['sass-css', 'minify-css']);
  gulp.watch('./js/myscripts/*.js', ['js']);
});

// compile js
gulp.task('jswatch', function() {
  gulp.watch('./js/myscripts/*.js', ['js']);
});


// default
gulp.task('default', ['jswatch']);
