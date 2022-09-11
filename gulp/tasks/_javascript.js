/* eslint-disable arrow-body-style */
import { dest } from 'gulp';
import rename from 'gulp-rename';
import browserify from 'browserify';
import vinylStream from 'vinyl-source-stream';
import vinylBuffer from 'vinyl-buffer';
import uglify from 'gulp-uglify-es';
import notify from 'gulp-notify';
import babelify from 'babelify';
import glob from 'glob';
import gulpIf from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import eventStream from 'event-stream';
import browserSync from 'browser-sync';

import { config, sourceFolder } from '../config';

const javascript = (done) => {
  const files = [
    `${sourceFolder}/js/main.js`,
    ...glob.sync(`${sourceFolder}/js/pages/**/*.js`),
  ];
  const scripts = files.map((file) => {
    return (
      browserify({
        entries: [file],
        transform: [
          babelify.configure({
            presets: ['@babel/preset-env'],
          }),
        ],
      })
        .bundle()
        .pipe(vinylStream(file))
        .pipe(vinylBuffer())
        .pipe(gulpIf(config.isDev, sourcemaps.init({
          loadMaps: true,
        })))
        .pipe(rename({
          dirname: '',
        }))
        .pipe(gulpIf(config.isDev, sourcemaps.write()))
        .pipe(dest(config.build.javascriptPrimary))
        .pipe(gulpIf(config.isProd, uglify({
          toplevel: true,
        }).on('error', notify.onError())))
        .pipe(rename({
          extname: '.min.js',
          dirname: '',
        }))
        .pipe(dest(config.build.javascriptPrimary))
        .pipe(browserSync.stream())
    );
  });
  return eventStream.merge(scripts).on('end', done);
};

export default javascript;
