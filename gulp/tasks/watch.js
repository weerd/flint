/**
 * Task: watch
 * gulp/tasks/browserify.js handles js recompiling with watchify
 * gulp/tasks/browserSync.js automatically reloads any files that change within
 * the directory it's serving from (not using right now!).
 */

var gulp       = require('gulp');
var livereload = require('gulp-livereload');
var path       = require('../util/assetPaths');

gulp.task('watch', ['setWatch'], function() {
  gulp.watch(path.sassSrc + '/**', ['sass']);
  gulp.watch(path.imagesSrc + '/**', ['images']);
  gulp.watch(path.jsSrc + '/main.js', ['browserify']);
  gulp.watch(path.sassDest + '/**').on('change', livereload.changed);
});
