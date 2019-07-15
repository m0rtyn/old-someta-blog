const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const svgmin = require('gulp-svgmin');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const del = require('del');
const htmlmin = require('gulp-htmlmin');
const babel = require('gulp-babel');
const postcssFixes = require('postcss-fixes');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
// const remove = require('gulp-html-remove');
const sitemap = require('gulp-sitemap');

const handleError = (error) => {
  console.log(error.toString());
  this.emit('end');
};

gulp.task('style', () => gulp
  .src('src/assets/styles/main.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(
    postcss([
      postcssFixes,
      autoprefixer,
      cssnano({
        safe: true,
        calc: false,
      }),
    ]),
  )
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest('public/assets/styles'))
  .pipe(browserSync.stream()));

gulp.task('pug', () => gulp
  .src('src/markup/pages/**/*.pug')
  .pipe(plumber())
  .pipe(
    pug({
      pretty: true,
    }),
  )
  .pipe(htmlmin({
    collapseWhitespace: true,
  }))
  .pipe(gulp.dest('public'))
  .pipe(browserSync.stream()));

// gulp.task('exported-html-cleaner', () => gulp
//   .src('src/markup/blocks/metabaza/ChatExport/messages.html')
//   .pipe(remove('head, .page_header, .sticker, .photo'))
//   .pipe(rename('index.html'))
//   .pipe(gulp.dest('src/markup/blocks/metabaza')));

gulp.task('js', () => gulp
  .src('src/assets/js/*.js')
  .pipe(babel({
    presets: ['@babel/env'],
  }))
  .on('error', handleError)
  .pipe(gulp.dest('public/assets/js'))
  .pipe(browserSync.stream()));

gulp.task('jsDebug', () => gulp
  .src('src/assets/js/*.js')
  .on('error', handleError)
  .pipe(gulp.dest('public/assets/js'))
  .pipe(browserSync.stream()));

gulp.task('images', () => gulp
  .src('src/assets/img/**/**/*.{png,jpg,gif,webp}')
  .pipe(gulp.dest('public/assets/img')));

gulp.task('svg', () => gulp
  .src('src/**/**/**/*.svg')
  .pipe(svgmin())
  .pipe(gulp.dest('public/')));

gulp.task('serve', () => {
  browserSync.init({
    server: 'public',
    notify: true,
    open: false,
  });

  gulp.watch('src/**/**/*.scss', ['style']);
  gulp.watch('src/markup/**/**/**/**/*.pug', ['pug']);
  gulp.watch('src/assets/img/**/*.*', ['images']);
  gulp.watch('src/assets/js/**/*.js', ['jsDebug']);
});

gulp.task('copy', () => gulp
  .src(
    [
      './src/assets/fonts/**/*.{woff,woff2}',
      './src/assets/video/**/*.mp4',
      './src/shows/**',
    ], {
      base: './src',
    },
  )
  .pipe(gulp.dest('./public/')));

gulp.task('clean', () => del.sync([
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
]));

gulp.task('sitemap', () => gulp
  .src(['public/**/**/index.html', 'public/**/*.html'], {
    read: false,
  })
  .pipe(sitemap({
    siteUrl: 'https://martyn.guru',
    priority: (siteUrl, loc) => (loc.match(/papers|posts/g) ? 1 : 0.5),
  }))
  .pipe(gulp.dest('./public')));

gulp.task('dev', [
  'clean',
  'copy',
  'pug',
  'style',
  'jsDebug',
  'images',
  'svg',
  'serve',
]);

gulp.task('build', [
  'clean',
  'copy',
  'pug',
  'style',
  'js',
  'images',
  'svg',
]);
