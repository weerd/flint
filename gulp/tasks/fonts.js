/**
 * Task: fonts
 *
 * Place copy of files in fonts directory into dist directory.
 *
 */

var gulp = require('gulp');
var path = require('../util/assetPaths');

gulp.task('fonts', function() {
  return gulp.src(path.fontsSrc + '/**')
    .pipe(gulp.dest(path.fontsDest))
});
