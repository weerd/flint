/**
 * Task: browserSync
 */

var gulp        = require('gulp');
var browserSync = require('browser-sync');
var path        = require('../util/assetPaths');

gulp.task('browserSync', ['build'], function() {
  browserSync.init([path.assetsDest + '/**'], {
    server: {
      baseDir: [path.assetsDest, 'public']
    }
  });
});
