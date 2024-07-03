
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const historyApiFallback = require('connect-history-api-fallback');


gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream()); 
});


gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './', // Корневая директория вашего проекта
            middleware: [historyApiFallback()] // Используем middleware для обработки маршрутов
        },
        startPath: 'index.html' // Начальная страница
    });

    // Слежение за изменениями файлов и перезагрузка браузера
    gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('src/css/**/*.css').on('change', browserSync.reload);
    gulp.watch('src/js/**/*.js').on('change', browserSync.reload);
});

// Задача по умолчанию
gulp.task('default', gulp.series('sass', 'serve'));

