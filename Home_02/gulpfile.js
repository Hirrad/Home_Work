const gulp = require('gulp');
const sass = require('gulp-sass');
//const GulpImagemin = require('gulp-imagemin');
const BrowserSync = require('browser-sync').create();



gulp.task('sass', function()  {
    return gulp.src('./src/scss/*')//задаем исходник
        .pipe(sass())               // Транскомпилируем в css
        .pipe(gulp.dest('./dest/css/'))// Ложим результат в файл
})

//gulp.task('img', function()  {
//    return gulp.src('./src/img/*')//задаем исходник
//        .pipe(GulpImagemin())
//        .pipe(gulp.dest('./dest/img/'))// Ложим результат в файл
//})

gulp.task('watch', function(){
    gulp.watch('./src/scss/*', ['sass'])
    //gulp.watch('./src/img/*', ['img'])
})

gulp.task('default', ['sass','watch'])
