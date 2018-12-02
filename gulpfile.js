'use strict'

const gulp = require('gulp')
const pug = require('gulp-pug')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const plumber = require('gulp-plumber')
const postcss = require('gulp-postcss')
const svgmin = require('gulp-svgmin')
const rename = require('gulp-rename')
const browserSync = require('browser-sync').create()
const del = require('del')
const htmlmin = require('gulp-htmlmin')

gulp.task('style', function() {
  gulp
    .src('src/assets/styles/main.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(
      postcss([
        require('postcss-fixes'),
        require('autoprefixer'),
        require('cssnano')({
          safe: true,
          calc: false,
        }),
      ])
    )
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('public/assets/styles'))
    .pipe(browserSync.stream())
})

gulp.task('pug', function() {
  return gulp
    .src('src/markup/pages/**/*.pug')
    .pipe(plumber())
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('public'))
    .pipe(browserSync.stream())
})

gulp.task('indexPug', function() {
  return gulp
    .src('src/markup/base/layout.pug')
    .pipe(plumber())
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(gulp.dest('public'))
    .pipe(browserSync.stream())
})

gulp.task('images', function() {
  return gulp
    .src('src/assets/img/**/**/*.{png,jpg,gif}')
    .pipe(gulp.dest('public/assets/img'))
})

gulp.task('svg', function() {
  return gulp
    .src('src/assets/img/svg/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('public/assets/img/svg'))
})

gulp.task('js', function() {
  return gulp
    .src('src/assets/js/**/*.js')
    .pipe(gulp.dest('public/assets/js'))
    .pipe(browserSync.stream())
})

gulp.task('serve', function() {
  browserSync.init({
    server: 'public',
    notify: true,
    open: false,
  })

  gulp.watch('src/**/**/*.scss', ['style'])
  gulp.watch('src/markup/**/**/**/**/*.pug', ['pug'])
  gulp.watch('src/assets/img/**/*.*', ['images'])
  gulp.watch('src/assets/js/**/*.js', ['js'])
})

gulp.task('copy', function() {
  return gulp
    .src(
      [
        './src/assets/fonts/**/*.{woff,woff2}',
        './src/assets/video/**/*.mp4',
        './src/shows/**',
      ],
      { base: './src' }
    )
    .pipe(gulp.dest('./public/'))
})

gulp.task('clean', function() {
  return del.sync([
    'public/**',
    '!public',
    '!public/*',
    '!public/assets',
    '!public/assets/video/**',
    '!public/assets/fonts/**',
    'public/assets/img/**',
    '!public/shows',
    '!public/shows/motivation/**',
    '!public/shows/255-shades-of-gray/**',
  ])
})

gulp.task('default', [
  'clean',
  'copy',
  'pug',
  'style',
  'js',
  'images',
  'svg',
  'serve',
])
gulp.task('build', ['clean', 'copy', 'pug', 'style', 'js', 'images', 'svg'])
