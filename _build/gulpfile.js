const gulp = require('gulp');//
// const changed = require('gulp-changed');//
const postcss = require('gulp-postcss');//
// const concat = require('gulp-concat');
// const cssnano = require('cssnano');
// const csso = require('postcss-csso');

gulp.task('style', function () {
  return gulp.src('./assets/css/*.css')
    //.pipe(changed('src',{extension: '.css'}))
    .pipe( postcss([ require('autoprefixer'), require('cssnano')] ))
    .pipe(gulp.dest('./assets/css'))
});


gulp.task('default', ['style']);
