/* eslint-disable arrow-body-style */
import del from 'del';
import { projectFolder } from '../config';

const clean = () => {
  return del(projectFolder);
};

export default clean;
