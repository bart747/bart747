var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var babel = require("gulp-babel");
var jshint = require('gulp-jshint');
var browserify = require('browserify');
var browserSync = require('browser-sync').create();
var source = require('vinyl-source-stream');


// SASS
gulp.task('sass', function() {
    return sass('./scss/main.scss')
        .pipe(gulp.dest('./css'))
});

// autoprefixer
gulp.task('auto', function() {
    return gulp.src('./css/main.css')
      .pipe(autoprefixer())
      .pipe(gulp.dest('./css'));
})

// lint
gulp.task('lint', function() {
    return gulp.src('./js/*.js')
    .pipe(jshint({
        esnext: true
    }))
        .pipe(jshint.reporter('default'));
 });

// babel
gulp.task('babel', ['lint'], function() {
    return gulp.src('./js/main.js')
        .pipe(babel())
        .pipe(gulp.dest('./js/babel'));
});

// browserify
gulp.task('brow', function() {
    return browserify('./js/script.js')
        .bundle()
        // pass ot vinyl source stream
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./js/build/'));
});

// serve
gulp.task('serve', ['sass', 'auto', 'lint', 'babel'], function() {

    browserSync.init({
        server: {
            baseDir: "./"
        }
     });

    gulp.watch('./scss/*.scss', ['sass']).on('change', browserSync.reload);
    gulp.watch('./css/*.css', ['auto']).on('change', browserSync.reload);
    gulp.watch('./js/*.js', ['lint', 'babel', 'sass']).on('change', browserSync.reload);
});

// watch
gulp.task('watch', function() {
    gulp.watch('./_sass/*.scss', ['sass']);
    gulp.watch('./css/*.css', ['auto']);
});

// default
gulp.task('default', ['sass', 'auto']);
