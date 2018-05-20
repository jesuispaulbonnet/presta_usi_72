// Include gulp
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var minify = require('gulp-minify');


// Compile Sass
gulp.task('sass', function() {
    return gulp.src('presta_usi_72/static/sass/presta_usi_72.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename('presta_usi_72.min.css'))
        .pipe(gulp.dest('presta_usi_72/static/css'));
});
// Minify javascript
gulp.task('scripts', function() {
  gulp.src('presta_usi_72/static/js/*')
    .pipe(minify({
      ext: {
          min:'.min.js'
      },
    }))
    .pipe(gulp.dest('presta_usi_72/static/dist/'));
});

//Watch task
gulp.task('watch', ['sass', 'scripts'], function() {
    gulp.watch('presta_usi_72/static/sass/**/*.scss', ['sass']);
    gulp.watch('presta_usi_72/static/js/**/*.js', ['scripts']);
});
