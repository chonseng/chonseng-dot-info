// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Compile Our Sass
// gulp.task('sass', function() {
//     return gulp.src('scss/*.scss')
//         .pipe(sass())
//         .pipe(gulp.dest('css'));
// });

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/web.js')
        .pipe(rename('web.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/source/*.js', ['lint', 'scripts']);
    // gulp.watch('scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['scripts', 'watch']);