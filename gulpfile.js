'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const minifyCss = require('gulp-minify-css');
const debug = require('gulp-debug');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const eslint = require('gulp-eslint');
const gulpIf = require('gulp-if');
const del = require('del');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';
const isProduction = process.env.NODE_ENV == 'production';

const paths = {
    html: ['src/**/*.html'],
    img: ['src/img/**/*.*'],
    less: ['src/less/**/*.less'],
    js: ['src/js/**/*.js']
};

gulp.task('styles', () => {
    gulp.src(paths.less)
        .pipe(gulpIf(isProduction, sourcemaps.init()))
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulpIf(isProduction, minifyCss()))
        .pipe(gulpIf(isProduction, sourcemaps.write()))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('scripts', () => {
    gulp.src(paths.js)
        .pipe(gulpIf(isProduction, sourcemaps.init()))
        .pipe(gulpIf(isProduction, uglify()))
        .pipe(gulpIf(isProduction, sourcemaps.write()))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('img', () => {
    gulp.src(paths.img)
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('entryFiles', () => {
    gulp.src(paths.html)
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('eslint', () => {
    gulp.src(paths.js)
        .pipe(gulpIf(isProduction, eslint()))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('watcher', () => {
    gulp.watch(paths.less, ['styles']);
    gulp.watch(paths.js, ['scripts']);
    gulp.watch(paths.html, ['entryFiles']);
});

gulp.task('serve', () => {

    browserSync.init({
        server: './dist/'
    });
});

gulp.task('default', ['img', 'entryFiles', 'styles', 'scripts', 'serve', 'watcher']);
