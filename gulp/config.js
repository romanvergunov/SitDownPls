const projectFolder = 'dist';
const sourceFolder = 'src';

const config = {
  source: {
    documents: `${sourceFolder}/assets/documents/**/*.{doc,docx,txt,text,log,pdf,ttf}`,
    audio: `${sourceFolder}/assets/audio/**/*.{mp3,wav,ogg,flac,aac}`,
    video: `${sourceFolder}/assets/video/**/*.{avi,wav,ogg,flac,aac}`,
    htmlPrimary: `${sourceFolder}/**/*.html`,
    fonts: `${sourceFolder}/fonts/**/*.{woff,woff2}`,
    vector: `${sourceFolder}/img/svg/**/*.svg`,
    sprites: `${sourceFolder}/img/sprites/**/*.svg`,
    picturesJpg: `${sourceFolder}/img/pictures/**/*.{jpg,jpeg}`,
    picturesPng: `${sourceFolder}/img/pictures/**/*.png`,
    picturesFavicon: `${sourceFolder}/img/favicons/**/*.png`,
    javascriptPrimary: `${sourceFolder}/js/main.js`,
    javascriptPages: `${sourceFolder}/js/pages/**/*.js`,
    styles: [
      `${sourceFolder}/scss/styles.scss`,
      `${sourceFolder}/scss/pages/**/*.scss`,
      `${sourceFolder}/scss/modules/**/*.scss`,
    ],
    php: `${sourceFolder}/**/*.php`,
  },

  build: {
    documents: `${projectFolder}/assets/documents/`,
    audio: `${projectFolder}/assets/audio/`,
    video: `${projectFolder}/assets/video/`,
    htmlPrimary: `${projectFolder}/`,
    fonts: `${projectFolder}/fonts/`,
    vector: `${projectFolder}/img/`,
    sprites: `${projectFolder}/img/`,
    picturesJpg: `${projectFolder}/img/`,
    picturesPng: `${projectFolder}/img/`,
    picturesFavicon: `${projectFolder}/img/`,
    javascriptPrimary: `${projectFolder}/js/`,
    javascriptPages: `${projectFolder}/js/pages/`,
    styles: `${projectFolder}/css/`,
    php: `${projectFolder}/`,
  },

  watch: {
    htmlPrimary: [
      `${sourceFolder}/index.html`,
      `${sourceFolder}/html/components/**/*.html`,
    ],
    htmlPages: [
      `${sourceFolder}/html/pages/**/*.html`,
    ],
    styles: `${sourceFolder}/scss/**/*.scss`,

    javascript: [
      `${sourceFolder}/js/main.js`,
      `${sourceFolder}/js/pages/**/*.js`,
      `${sourceFolder}/js/components/**/*.js`,
    ],

    php: `${sourceFolder}/**/*.php`,

    pictures: `${sourceFolder}/img/svg/**/*.svg`,

    sprites: `${sourceFolder}/img/sprites/**/*.svg`,
  },

  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};

export { projectFolder, sourceFolder, config };
