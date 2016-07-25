'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const minifyCss  = require('gulp-minify-css');
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
    html:['src/**/*.html'],
    img:['src/img/**/*.*'],
    less:['src/less/**/*.less'],
    js:['src/js/**/*.js']
};

gulp.task('styles', function () {
	return gulp.src(paths.less) 
		// .pipe(debug({titile: 'src'}))
		.pipe(gulpIf(isProduction, sourcemaps.init()))
		.pipe(less())
		// .pipe(concat('all.css'))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		 }))
		.pipe(gulpIf(isProduction, minifyCss()))
		.pipe(gulpIf(isProduction, sourcemaps.write()))
		.pipe(gulp.dest('dist/css')) 
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts', function() {
    return gulp.src(paths.js)
        .pipe(gulpIf(isProduction, sourcemaps.init()))
        // .pipe(concat('all.js'))
        .pipe(gulpIf(isProduction, uglify()))
        .pipe(gulpIf(isProduction, sourcemaps.write()))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('img', function() {
    return gulp.src(paths.img)
    	.pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('entryFiles', function() {
    return gulp.src(paths.html)
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('eslint', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(gulpIf(isProduction, eslint()))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('watcher', function() {
  gulp.watch(paths.less, ['styles']);
  gulp.watch(paths.js, ['scripts']);
  gulp.watch(paths.html, ['entryFiles']);
});

gulp.task('serve', function() {

    browserSync.init({
         server: "./dist/"
     });
});


gulp.task('default', ['img', 'entryFiles', 'styles', 'scripts', 'serve', 'watcher']);