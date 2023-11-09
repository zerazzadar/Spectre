var gulp = require('gulp');
var uglify = require('gulp-uglify');
var purge = require('gulp-css-purge');
var clean= require('gulp-clean');
var imagemin= require('gulp-imagemin');


gulp.task('clean', function () {
    return gulp.src(['../../static/assets/css/*','../../static/assets/js/*','../../static/assets/img/*','../../static/assets/fonts/*'], {read: false})
    .pipe(clean({force: true}));
});

gulp.task('purge', function(){
    return gulp.src(['../assets/css/**/*.css','!../assets/css/**/*.min.css'])
    .pipe(purge({
        trim : true,
        shorten : true,
        verbose : true
    }))
    .pipe(gulp.dest('../../static/assets/css/'))
})

gulp.task('copy-css', function(){
    return gulp.src('../assets/css/**/*.min.css')
    .pipe(gulp.dest('../../static/assets/css/'))
})

gulp.task('uglify', function(){
    return gulp.src(['../assets/js/**/*.js','!../assets/js/**/*.min.js'])
        .pipe(uglify())
        .pipe(gulp.dest('../../static/assets/js/'))
})

gulp.task('imagemin', function(){
    return gulp.src(['../assets/img/**/*.*'])
        .pipe(imagemin())
        .pipe(gulp.dest('../../static/assets/img/'))
})

gulp.task('copy-js', function(){
    return gulp.src('../assets/js/**/*.min.js')
    .pipe(gulp.dest('../../static/assets/js/'))
})

gulp.task('copy-font', function(){
    return gulp.src('../assets/fonts/**/*.*')
    .pipe(gulp.dest('../../static/assets/fonts/'))
})


const desplegar = gulp.series('clean', 'purge','copy-css','uglify','copy-js','imagemin','copy-font');
gulp.task('desplegar', desplegar);



