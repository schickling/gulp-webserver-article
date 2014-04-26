var gulp = require('gulp'),
  connect = require('gulp-connect'),
  watch = require('gulp-watch'),
  less = require('gulp-less'),
  coffee = require('gulp-coffee');

gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    root: ['.', '.tmp']
  });
});

gulp.task('livereload', function() {
  gulp.src(['.tmp/styles/*.css', '.tmp/scripts/*.js'])
    .pipe(watch())
    .pipe(connect.reload());
});

gulp.task('less', function() {
  gulp.src('styles/main.less')
    .pipe(less())
    .pipe(gulp.dest('.tmp/styles'));
});

gulp.task('coffee', function() {
  gulp.src('scripts/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('.tmp/scripts'));
});

gulp.task('watch', function() {
  gulp.watch('styles/*.less', ['less']);
  gulp.watch('scripts/*.coffee', ['coffee']);
})

gulp.task('default', ['less', 'coffee', 'webserver', 'livereload', 'watch']);