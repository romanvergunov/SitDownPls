/* eslint-disable arrow-body-style */
import { src, dest } from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import rename from 'gulp-rename';
import { config } from '../config';

const sprites = () => {
  return src(config.source.sprites)
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: 'sprite.svg',
        },
      },
    }))
    .pipe(rename({
      dirname: '/sprites',
    }))
    .pipe(dest(config.build.sprites));
};

export default sprites;
