/**
 * Task: images
 */

var gulp     = require('gulp');
var changed  = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var path     = require('../util/assetPaths');

gulp.task('images', function() {

  return gulp.src(path.imagesSrc + '/**')
    .pipe(changed(path.imagesDest)) // Ignore unchanged files
    .pipe(imagemin()) // Optimize
    .pipe(gulp.dest(path.imagesDest));
});
