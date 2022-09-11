/* eslint-disable arrow-body-style */
import { src, dest } from 'gulp';
import rename from 'gulp-rename';
import squoosh from 'gulp-libsquoosh';
import { config } from '../config';

const picturesJpg = () => {
  return src(config.source.picturesJpg)
    .pipe(rename({
      extname: '.jpg',
    }))
    .pipe(squoosh({
      mozjpeg: {},
      webp: {},
      avif: {},
    }))
    .pipe(rename({
      dirname: 'pictures/',
    }))
    .pipe(dest(config.build.picturesJpg));
};

const picturesPng = () => {
  return src(config.source.picturesPng)
    .pipe(squoosh({
      oxipng: {},
      webp: {},
      avif: {},
    }))
    .pipe(rename({
      dirname: 'pictures/',
    }))
    .pipe(dest(config.build.picturesPng));
};

const picturesFavicon = () => {
  return src(config.source.picturesFavicon)
    .pipe(squoosh({
      oxipng: {},
    }))
    .pipe(rename({
      dirname: 'favicons/',
    }))
    .pipe(dest(config.build.picturesFavicon));
};

export { picturesJpg, picturesPng, picturesFavicon };
