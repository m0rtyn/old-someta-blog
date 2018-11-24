'use strict';

const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
// const uglify = require("gulp-uglify");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
// const imagemin = require("gulp-imagemin");
const svgmin = require("gulp-svgmin");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();

const del = require("del");


gulp.task("style", function() {
  gulp.src("src/assets/styles/main.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      require('postcss-fixes'),
      require('autoprefixer'),
      require('cssnano')({
        'safe': true,
        'calc': false
      })
    ]))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("public/assets/styles"))
    .pipe(browserSync.stream());
});

gulp.task("html", function() {
  return gulp.src("src/pug/pages/**/*.pug")
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest("public"))
    .pipe(browserSync.stream());
});

gulp.task("indexhtml", function() {
  return gulp.src("src/pug/base/layout.pug")
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest("public"))
    .pipe(browserSync.stream());
});

gulp.task("images", function() {
  return gulp.src("src/assets/img/**/**/*.{png,jpg,gif}")
    // .pipe(imagemin([
    //   imagemin.optipng({optimizationLevel: 3}),
    //   imagemin.jpegtran({progressive: true}),
    //   imagemin.gifsicle()
    // ]))
    .pipe(gulp.dest("public/assets/img"));
});

gulp.task("svg", function() {
  return gulp.src("src/assets/img/svg/*.svg")
    .pipe(svgmin())
    .pipe(gulp.dest("public/assets/img/svg"));
});

gulp.task("js", function () {
  return gulp.src("src/js/**/*.js")
      .pipe(concat("script.js"))
      // .pipe(uglify())
      .pipe(rename("script.min.js"))
      .pipe(gulp.dest("public/js"))
      .pipe(browserSync.stream());
});

gulp.task("serve", function() {
  browserSync.init({
    server: "public",
    notify: false,
    open: true
  });

  gulp.watch("src/assets/styles/**/*.scss", ["style"]);
  gulp.watch("src/pug/**/**/**/**/*.pug", ["html"]);
  gulp.watch("src/pug/pages/**/*.pug", ["html"]);
  gulp.watch("src/assets/img/**/*.*", ["images"]);
  gulp.watch("src/js/**/*.js", ["js"]);
});

gulp.task("servesmall", function() {
  browserSync.init({
    server: "public",
    notify: false,
    open: false
  });

  gulp.watch("src/assets/styles/**/*.scss", ["style"]);
  gulp.watch("src/pug/**/**/**/**/*.pug", ["indexhtml"]);
  gulp.watch("src/js/**/*.js", ["js"]);
});

gulp.task("copy", function() {
  return gulp.src(
    [
      "./src/assets/fonts/**/*.{woff,woff2}",
      "./src/assets/video/**/*.mp4",
      "./src/shows/**",
    ],
    { base: "./src" }
  )
      .pipe(gulp.dest("./public/"));
});

gulp.task("clean", function() {
  return del.sync([
    'public/**', '!public', '!public/*', 
    '!public/assets', '!public/assets/video/**', 
    '!public/assets/fonts/**', 'public/assets/img/**', 
    '!public/shows', '!public/shows/motivation/**', '!public/shows/255-shades-of-gray/**' 
  ]);
});

gulp.task('default', [ "clean", "copy", "html", "style", "js", "images", "svg", "serve" ]);
gulp.task('build', [ "clean", "copy", "html", "style", "js", "images", "svg" ]);
