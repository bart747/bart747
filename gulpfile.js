var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var babel = require('gulp-babel');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var source = require('vinyl-source-stream');

        
// SASS
gulp.task('sass', function() {
  return sass('./_sass/main.scss')
    .pipe(gulp.dest('./css'));
});

// autoprefixer
gulp.task('auto', ['sass'], function() {
  return gulp.src('./css/main.css')
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./css'));
});

// minify css
gulp.task('minify-css', ['auto'], function() {
  return gulp.src('./css/*.css')
    .pipe(minifyCss({compatibility: 'ie9'}))
    .pipe(gulp.dest('./css/mini'));
});

// lint
gulp.task('lint', function() {
  return gulp.src('js/myscripts/*.js')
    .pipe(jshint({
        esnext: true
    }))
    .pipe(jshint.reporter('default'));
});

// babel
gulp.task('babel', ['lint'], function() {
    return gulp.src('./js/myscripts/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./js/babel'));
});

// concat
gulp.task('concat', function() {
  return gulp.src(['js/plugins/*.js', './js/babel/*.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./js/dist'));
});

// serve
gulp.task('serve', ['sass', 'auto'], function() {

  browserSync.init({
    server: '_site'
  });

  gulp.watch('./_scss/*.scss', ['sass']).on('change', browserSync.reload);
  gulp.watch('./css/*.css', ['auto', 'minify-css']).on('change', browserSync.reload);
  gulp.watch('./js/*/*.js', ['lint', 'babel', 'concat']).on('change', browserSync.reload);
});

// watch
gulp.task('watch', function() {
  gulp.watch('./_sass/*.scss', ['sass', 'auto', 'minify-css']);
  gulp.watch('./js/*/*.js', ['lint', 'babel', 'concat']);
});

// default


gulp.task('default', ['sass', 'auto']);
