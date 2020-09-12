import { task } from 'gulp';

const browserSync = require('browser-sync').create();

function goToLive() {
  browserSync.init({
    server: {
      baseDir: './',
    },
    port: 3000,
  });
}

task(goToLive);
