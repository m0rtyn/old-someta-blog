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
const server = require("browser-sync").create();
const run = require("run-sequence");
const del = require("del");


gulp.task("style", function() {
  gulp.src("assets/styles/main.scss")
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
  return gulp.src("assets/img/**/**/*.{png,jpg,gif}")
    // .pipe(imagemin([
    //   imagemin.optipng({optimizationLevel: 3}),
    //   imagemin.jpegtran({progressive: true}),
    //   imagemin.gifsicle()
    // ]))
    .pipe(gulp.dest("_build/assets/img"));
});

gulp.task("svg", function() {
  return gulp.src("assets/img/svg/*.svg")
    .pipe(svgmin())
    .pipe(gulp.dest("_build/assets/img/svg"));
});

gulp.task("js", function () {
  return gulp.src("assets/js/**/*.js")
      .pipe(concat("script.js"))
      // .pipe(uglify())
      .pipe(rename("script.min.js"))
      .pipe(gulp.dest("_build/assets/js"))
      .pipe(server.stream());
});


// //====EXPERIMENTAL FOR JS WITH MODULES====
// const watchify = require('watchify');
// const browserify = require('browserify');
// const source = require('vinyl-source-stream');
// // const buffer = require('vinyl-buffer');
// const assign = require('lodash.assign');


// var customOpts = {
//   entries: ['./assets/js/main.js', './assets/js/telegram-paging.js'],
//   debug: true
// };
// var opts = assign({}, watchify.args, customOpts);
// var b = watchify(browserify(opts));

// gulp.task('js', bundle); // so you can run `gulp js` to build the file
// b.on('update', bundle); // on any dep update, runs the bundler
// // b.on('log', log.info); // output build logs to terminal

// function bundle() {
//   return b.bundle()
//     .pipe(source('script.js'))
//     // .pipe(sourcemaps.write('./')) // writes .map file
//     .pipe(gulp.dest("_build/assets/js"))
//     .pipe(server.stream());
// }
// //====EXPERIMENTAL====



gulp.task("serve", function() {
  server.init({
    server: "_build",
    notify: false,
    open: true
  });

  gulp.watch("assets/styles/**/*.scss", ["style"]);
  gulp.watch("pug/**/**/**/**/*.pug", ["html"]);
  gulp.watch("pug/pages/*.pug", ["html"]);
  gulp.watch("assets/img/**/*.*", ["images"]);
  gulp.watch("assets/js/**/*.js", ["js"]);
});

gulp.task("servesmall", function() {
  server.init({
    server: "_build",
    notify: false,
    open: false
  });

  gulp.watch("assets/styles/**/*.scss", ["style"]);
  gulp.watch("pug/**/**/**/**/*.pug", ["indexhtml"]);
  gulp.watch("assets/js/**/*.js", ["js"]);
});

gulp.task("copy", function() {
  return gulp.src([
    "assets/fonts/**/*.{woff,woff2}",
    "assets/img/**/*.mp4"
  ], {
    base: "."
  })
      .pipe(gulp.dest("_build"));
});

gulp.task("clean", function() {
  return del.sync([
    '_build/**', '!_build', '!_build/*', 
    '!_build/assets', '!_build/assets/video/**', 
    '!_build/assets/fonts/**', '_build/assets/img/**', 
    '!_build/shows', '!_build/shows/motivation/**', 
  ]);
});

gulp.task("default", function(fn) {
  run("clean", "copy", "html", "style", "js", "images", "svg", "serve", fn)
});

gulp.task("gulpSmall", function(fn) {
  run("indexhtml", "style", "js", "servesmall", fn)
});
