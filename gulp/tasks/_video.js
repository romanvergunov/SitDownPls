/* eslint-disable arrow-body-style */
import { src, dest } from 'gulp';
import { config } from '../config';

const video = () => {
  return src(config.source.video)
    .pipe(dest(config.build.video));
};

export default video;
