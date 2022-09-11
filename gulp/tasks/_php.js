/* eslint-disable arrow-body-style */
import { src, dest } from 'gulp';
import { config } from '../config';

const php = () => {
  return src(config.source.php)
    .pipe(dest(config.build.php));
};

export default php;
