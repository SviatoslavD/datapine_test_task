
var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
 
gulp.task('js', function () {
  gulp.src(['app/scripts/main_module.js', 'app/scripts/**/*.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('app/app.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('.'))
});

gulp.task('watch', ['js'], function () {
  gulp.watch('app/scripts/**/*.js', ['js'])
});