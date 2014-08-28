/**
 * Task: sass
 */

var gulp         = require('gulp');
var sass         = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var handleErrors = require('../util/handleErrors');
var path         = require('../util/assetPaths');

gulp.task('sass', function () {
  return gulp.src(path.sassSrc + '/**/*.scss')
    .pipe(sass({
      bundleExec: true,
      require: 'susy',
      style: 'compressed',
      sourcemapPath: '../../app/assets/sass',
      cacheLocation: path.assetsSrc + '/.sass-cache',
    }))
    .on('error', handleErrors)
    .pipe(autoprefixer('last 5 version'))
    .pipe(gulp.dest(path.sassDest));
});
