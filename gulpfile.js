const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            port: 9000,
            baseDir: "build" ,
            injectChanges: true
        }
    });

    gulp.watch("build/**/*").on('change', browserSync.reload);

});





