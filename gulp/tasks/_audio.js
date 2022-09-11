/* eslint-disable arrow-body-style */
import { src, dest } from 'gulp';
import { config } from '../config';

const audio = () => {
  return src(config.source.audio)
    .pipe(dest(config.build.audio));
};

export default audio;
