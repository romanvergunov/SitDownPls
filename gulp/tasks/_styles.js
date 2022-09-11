/* eslint-disable arrow-body-style */
import { src, dest } from 'gulp';
import gulpSass from 'gulp-sass';
import baseSass from 'sass';
import postcss from 'gulp-postcss';
import postcssWillChange from 'postcss-will-change';
import postcssClipPath from 'postcss-clip-path-polyfill';
import postcssPxToRem from 'postcss-pxtorem';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import gulpIf from 'gulp-if';
import { config } from '../config';

const sass = gulpSass(baseSass);

// |=============== SETTING UP THE TASK OF OPTIMIZING STYLE FILES ===============>
const styles = () => {
  return src(config.source.styles)
    .pipe(gulpIf(config.isDev, sourcemaps.init({
      loadMaps: true,
    })))
    .pipe(sass.sync({
      outputStyle: 'expanded',
    }).on('error', sass.logError))
    .pipe(gulpIf(config.isProd, postcss([
      postcssWillChange(),
      postcssClipPath(),
      postcssPxToRem({
        rootValue: 16,
        unitPrecision: 5,
        propList: [
          '*',
          '!border*',
          '!outline*',
          '!box-shadow',
          '!backdrop-filter',
          '!filter',
          '!text-shadow',
        ],
        selectorBlackList: ['page'],
        replace: true,
        mediaQuery: false,
        minPixelValue: 0,
      }),
    ])))
    .pipe(gulpIf(config.isProd, autoprefixer({
      overrideBrowserslist: ['last 5 versions'],
    })))
    .pipe(rename({
      dirname: '',
    }))
    .pipe(gulpIf(config.isDev, sourcemaps.write()))
    .pipe(dest(config.build.styles))
    .pipe(gulpIf(config.isProd, cleanCSS({
      level: 1,
    })))
    .pipe(rename({
      extname: '.min.css',
      dirname: '',
    }))
    .pipe(dest(config.build.styles))
    .pipe(browserSync.stream());
};

// |=============== EXPORTING THE MAIN VARIABLE FOR USE ===============>
export default styles;
