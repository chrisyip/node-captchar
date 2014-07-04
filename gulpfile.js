var gulp = require('gulp')
  , jshint = require('gulp-jshint')
  , stylish = require('jshint-stylish')

gulp.task('jshint', function () {
  return gulp
          .src(['index.js'])
          .pipe(jshint())
          .pipe(jshint.reporter(stylish))
})

gulp.task('test', ['jshint'], function (cb) {
  cb()
})

gulp.task('default', ['test'])
