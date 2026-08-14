const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');


function compilaSass() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
}

function comprimeImagens() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

function comprimeJavaScript() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

function watchFiles() {
    gulp.watch('./src/styles/*.scss', gulp.series(compilaSass));
    gulp.watch('./src/scripts/*.js', gulp.series(comprimeJavaScript));
    gulp.watch('./src/images/**/*', gulp.series(comprimeImagens));
}

exports.default = gulp.series(
    gulp.parallel(compilaSass, comprimeImagens, comprimeJavaScript),
    watchFiles
);

exports.sass = compilaSass;
exports.images = comprimeImagens;
exports.javascript = comprimeJavaScript;
