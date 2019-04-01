const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

function scripts() {
  return gulp.src('./scripts/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dest/'))
}

function watch() {
  gulp.watch('./scripts/*.js', scripts)

}

gulp.task('scripts', scripts);
gulp.task('watch', watch);


