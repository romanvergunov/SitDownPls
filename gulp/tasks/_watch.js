/* eslint-disable arrow-body-style */
import { watch } from 'gulp';
import browserSync from 'browser-sync';
import htmlPrimary from './_htmlPrimary';
import styles from './_styles';
import javascript from './_javascript';
import vector from './_vector';
import sprites from './_sprites';
import { config, projectFolder } from '../config';

const fileWatch = (callback) => {
  browserSync.init({
    server: {
      baseDir: projectFolder,
    },
    port: 3000,
    notify: false,
    open: true,
  });
  callback();
};

watch(config.watch.htmlPrimary, htmlPrimary);
watch(config.watch.styles, styles);
watch(config.watch.javascript, javascript);
watch(config.watch.pictures, vector);
watch(config.watch.sprites, sprites);

export default fileWatch;
