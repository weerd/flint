/**
 * Task: compressVendor
 *
 * Run a variety of tasks on standalone vendor JS files.
 *
 */

var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var path   = require('../util/assetPaths');

gulp.task('compressVendor', function() {
  return gulp.src(path.jsSrc + '/vendor/**')
    .pipe(uglify())
    .pipe(gulp.dest(path.jsDest))
});
