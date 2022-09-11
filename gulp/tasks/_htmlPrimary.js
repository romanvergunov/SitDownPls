/* eslint-disable arrow-body-style */
import { src, dest } from 'gulp';
import browserSync from 'browser-sync';
import htmlmin from 'gulp-htmlmin';
import gulpIf from 'gulp-if';
import fileinclude from 'gulp-file-include';
import { config } from '../config';

const htmlPrimary = () => {
  return src(config.source.htmlPrimary)
    .pipe(fileinclude({
      prefix: '@',
    }))
    .pipe(gulpIf(config.isProd, htmlmin({
      collapseWhitespace: true,
      removeEmptyAttributes: true,
      useShortDoctype: true,
      removeComments: true,
      collapseBooleanAttributes: true,
    })))
    .pipe(dest(config.build.htmlPrimary))
    .pipe(browserSync.stream());
};

export default htmlPrimary;
