/* eslint-disable arrow-body-style */
import { src, dest } from 'gulp';
import rename from 'gulp-rename';
import { config } from '../config';

const vector = () => {
  return src(config.source.vector)
    .pipe(rename({
      dirname: '/svg',
    }))
    .pipe(dest(config.build.vector));
};

export default vector;
