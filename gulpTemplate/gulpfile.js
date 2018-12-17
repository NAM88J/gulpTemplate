var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify')
var jade = require('gulp-jade');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
	return gulp.src('app/scss/**/*.scss')
	.pipe(sass().on('error', notify.onError({
			message: "<%= error.message %>",
			title  : "Sass Error!"
			})))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream())
});

gulp.task('jade', function() {
	return gulp.src('app/jade/**/*.jade')
	.pipe(jade({pretty: true}).on('error', notify.onError({
			message: "<%= error.message %>",
			title  : "Jade Error!"
			})))
	.pipe(gulp.dest('app'))
	.pipe(browserSync.stream())
});

gulp.task('serve', ['jade'], function() {
	browserSync.init({
		server: "./app",
		port: 300
	});

	gulp.watch("app/scss/**/*.scss", ['sass']);
	gulp.watch("app/jade/**/*.jade", ['jade']);
});

gulp.task('default', ['serve']);