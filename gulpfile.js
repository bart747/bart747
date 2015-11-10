var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var compass = require('gulp-compass');
var autoprefixer = require('gulp-autoprefixer');
var coffee = require('gulp-coffee');
var coffeelint = require('gulp-coffeelint');
var jshint = require('gulp-jshint');
var browserify = require('browserify');
var browserSync = require('browser-sync').create();
var source = require('vinyl-source-stream');


// SASS
gulp.task('sass', function() {
  return sass('./_sass/main.scss')
    .pipe(gulp.dest('./css'))
});

// autoprefixer
gulp.task('auto', ['sass'], function() {
  return gulp.src('./css/main.css')
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./css'));
})

// compass
gulp.task('comp', function() {
  return gulp.src('./scss/*.scss')
    .pipe(compass({
      config_file: 'config.rb',
      css: 'stylesheets',
      sass: 'scss',
    }))
    .pipe(gulp.dest('./stylesheets'));
});

// CoffeeScript
gulp.task('coffee', function() {
  return gulp.src('src/coffee/*.coffee')
    .pipe(coffeelint())
    .pipe(coffee({ bare:true }))
    .pipe(gulp.dest('src/js'));
});

// lint
gulp.task('lint', function() {
  return gulp.src('src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// browserify
gulp.task('brow', function() {
  return browserify('src/js/script.js')
    .bundle()
    // pass ot vinyl source stream
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('src/js/build/'));
});

// serve
gulp.task('serve', ['sass', 'auto'], function() {

  browserSync.init({
    server: ''
  });

  gulp.watch('./_scss/*.scss', ['sass']).on('change', browserSync.reload);
  gulp.watch('./css/*.css', ['auto']).on('change', browserSync.reload);
});

// watch
gulp.task('watch', function() {
  gulp.watch('./_sass/*.scss', ['sass']);
  gulp.watch('./css/*.css', ['auto']);
});

// default


gulp.task('default', ['sass', 'auto']);
