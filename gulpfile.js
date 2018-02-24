'use strict';

const gulp = require('gulp'),
      connect = require('gulp-connect'),
      sass = require('gulp-sass'),
      cssnano = require('gulp-cssnano'),
      nodemon = require('gulp-nodemon'),
      browserSync = require('browser-sync').create(),
      paths = {
        views : './public/components/**/**/**/**/*.html',
        styles : './public/sources/styles/style.scss',
        js : './public/components/**/**/**/**/*.js',
        excss: './public/*.css'
      }

gulp.task('connect', () => {
  connect.server({
    root: 'public',
    port: 8000,
    livereload: true
  });
  browserSync.init({
    server: './public'
  });
});

gulp.task('dependencies', () => {
  gulp.src([
    './node_modules/bootstrap/dist/js/bootstrap.min.js',
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/popper.js/dist/popper.min.js'
  ])
  .pipe(gulp.dest('./public/lib/bootstrap'));

  gulp.src([
    './node_modules/sweetalert/dist/sweetalert.min.js',
  ])
  .pipe(gulp.dest('./public/lib/sweetalert'))

  gulp.src([
    './node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
    './node_modules/oclazyload/dist/ocLazyLoad.min.js',
    './node_modules/ui-router-page-title/page-title.min.js'
  ])
  .pipe(gulp.dest('./public/lib/angular/routing'));

  gulp.src([
    './node_modules/angular/angular.min.js'
  ])
  .pipe(gulp.dest('./public/lib/angular'));
});

gulp.task('reload', () => {
  gulp.src([paths.views, paths.js, paths.excss])
  .pipe(connect.reload())
  .pipe(browserSync.stream());
});

gulp.task('styles', () => {
  gulp.src(paths.styles)
  .pipe(sass().on('error', sass.logError))
  .pipe(cssnano())
  .pipe(gulp.dest('./public'))
})

gulp.task('watch', () => {
  gulp.watch([paths.views, paths.js, paths.styles], ['reload', 'styles'])
  .on('change', browserSync.reload);
});

gulp.task('default', ['connect', 'dependencies', 'reload', 'styles', 'watch']);
