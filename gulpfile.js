'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect');
const nodemon = require('gulp-nodemon');

gulp.task('connect', () => {
  connect.server({
    root:'public',
    port: 8000,
    livereload: true
  });
});

gulp.task('dependencies', () => {
  gulp.src([
    './node_modules/bootstrap/dist/js/bootstrap.min.js',
    './node_modules/bootstrap/dist/css/bootstrap.min.css'
  ])
  .pipe(gulp.dest('./public/lib/bootstrap'));

  gulp.src([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/popper.js/dist/popper.min.js',
    './node_modules/sweetalert/dist/sweetalert.min.js',
    './node_modules/angular/angular.min.js',
    './node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
    './node_modules/angular-css/angular-css.min.js',
    './node_modules/oclazyload/dist/ocLazyLoad.min.js'
  ])
  .pipe(gulp.dest('./public/lib/'));
});

gulp.task('reload', () => {
  gulp.src([
    './public/components/**/*.html',
    './public/components/**/*.css',
    './public/components/**/*.js'
  ])
  .pipe(connect.reload())
})

gulp.task('watch', () => {
  gulp.watch([
    './public/*.css',
    './public/components/*.css',
    './public/components/**/*.css',
    './public/components/**/**/*.css',
    './public/*.js',
    './public/components/*.js',
    './public/components/**/*.js',
    './public/components/**/**/*.js',
    './public/*.html',
    './public/components/*.html',
    './public/components/**/*.html',
    './public/components/**/**/*.html'
  ], ['reload']);
});

gulp.task('default', ['connect', 'dependencies', 'reload', 'watch']);
