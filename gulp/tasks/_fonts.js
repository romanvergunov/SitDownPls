/* eslint-disable arrow-body-style */
import { src, dest } from 'gulp';
import { config } from '../config';

const fonts = () => {
  return src(config.source.fonts)
    .pipe(dest(config.build.fonts));
};

export default fonts;
