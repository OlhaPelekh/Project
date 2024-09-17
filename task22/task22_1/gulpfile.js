const gulp = require('gulp');  
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

const paths = {
    styles: {
        src: 'src/scss/**/*.scss',
        dest: 'dist/css/'
    },
    scripts: {
        src: 'src/js/**/*.js',
        dest: 'dist/js/'
    },
    html: {
        src: 'src/*.html',
        dest: 'dist/'
    },
    images: {
        src: 'src/img/*',
        dest: 'dist/img/'
    }
};

function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
}

function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(concat('main.js'))
        .pipe(terser())  
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browserSync.stream());
}

function html() {
    return gulp.src(paths.html.src)
        .pipe(gulp.dest(paths.html.dest))
        .pipe(browserSync.stream());
}

// function images() {
//     return gulp.src(paths.images.src)
//         .pipe(imagemin())
//         .pipe(gulp.dest(paths.images.dest))
//         .pipe(browserSync.stream());
// }
function images() {
    return gulp.src(paths.images.src)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest))
        .pipe(browserSync.stream())
        .on('end', () => console.log('Images processed successfully'));
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.html.src, html);
    gulp.watch(paths.images.src, images)
}

exports.styles = styles;
exports.scripts = scripts;
exports.html = html;
exports.images=images;
exports.watch = watch;

exports.default = gulp.series(
    gulp.parallel(styles, scripts, html, images),
    watch
);
