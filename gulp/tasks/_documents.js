/* eslint-disable arrow-body-style */
import { src, dest } from 'gulp';
import { config } from '../config';

const documents = () => {
  return src(config.source.documents)
    .pipe(dest(config.build.documents));
};

export default documents;
