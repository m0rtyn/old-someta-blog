'use strict';

const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const minify = require("gulp-csso");
const imagemin = require("gulp-imagemin");
const svgmin = require("gulp-svgmin");
const rename = require("gulp-rename");
const server = require("browser-sync").create();
const run = require("run-sequence");
const del = require("del");

gulp.task("style", function() {
  gulp.src("assets/styles/main.scss")
    .pipe(plumber())
    .pipe(sass())
    // .pipe(postcss())
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("_build/assets/styles"))
    .pipe(server.stream());
});

gulp.task("html", function() {
  return gulp.src("pug/pages/**/*.pug")
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest("_build"))
    .pipe(server.stream());
});

gulp.task("indexhtml", function() {
  return gulp.src("pug/base/layout.pug")
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest("_build"))
    .pipe(server.stream());
});

gulp.task("images", function() {
  return gulp.src("assets/img/*.{png,jpg,gif}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.gifsicle()
    ]))
    .pipe(gulp.dest("_build/assets/img"));
});

gulp.task("svg", function() {
  return gulp.src("assets/img/svg/*.svg")
    .pipe(svgmin())
    .pipe(gulp.dest("_build/assets/img/svg"));
});

gulp.task("js", function () {
  return gulp.src("js/**/*.js")
      .pipe(concat("script.js"))
      .pipe(uglify())
      .pipe(rename("script.min.js"))
      .pipe(gulp.dest("_build/js"))
      .pipe(server.stream());
});

gulp.task("serve", function() {
  server.init({
    server: "_build",
    notify: false,
    open: true
  });

  gulp.watch("scss/**/*.scss", ["style"]);
  gulp.watch("pug/**/**/**/**/*.pug", ["html"]);
  gulp.watch("pug/pages/*.pug", ["html"]);
  gulp.watch("img/**/*.*", ["images"]);
  gulp.watch("js/**/*.js", ["js"]);
});

gulp.task("servesmall", function() {
  server.init({
    server: "_build",
    notify: false,
    open: true
  });

  gulp.watch("scss/**/*.scss", ["style"]);
  gulp.watch("pug/**/**/**/**/*.pug", ["indexhtml"]);
  gulp.watch("js/**/*.js", ["js"]);
});

gulp.task("copy", function() {
  return gulp.src([
    "fonts/**/*.{woff,woff2}",
    "img/**"
  ], {
    base: "."
  })
      .pipe(gulp.dest("_build"));
});

gulp.task("clean", function() {
  return del.sync(['_build/**', '!_build', '!_build/*', '!_build/assets', '!_build/assets/fonts/**', '!_build/sitemap.xml']);
});

gulp.task("default", function(fn) {
  run("clean", "copy", "html", "style", "js", "images", "svg", "serve", fn)
});

gulp.task("gulpSmall", function(fn) {
  run("indexhtml", "style", "js", "servesmall", fn)
});
