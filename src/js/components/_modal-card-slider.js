import A11yDialog from 'a11y-dialog';
import { createFocusTrap } from 'focus-trap';
import Swiper from 'swiper/swiper-bundle';
import toggleTwoClasses from './_toggle-two-classes';

const oneClickBuyButton = document.querySelector('.left-sliderOne');

const wrapper = document.getElementById('slider-dialog-window');

const buyProductDialogWindow = new A11yDialog(wrapper);

const focusTrap = createFocusTrap(wrapper, {
  onActivate: () => wrapper.classList.add('ui-focus-trap-active'),
  onDeactivate: () => wrapper.classList.remove('ui-focus-trap-active'),

  checkCanFocusTrap: (trapContainers) => {
    const results = trapContainers.map((trapContainer) => new Promise((resolve) => {
      const interval = setInterval(() => {
        if (getComputedStyle(trapContainer).visibility !== 'hidden') {
          resolve();
          clearInterval(interval);
        }
      }, 5);
    }));

    return Promise.all(results);
  },
});

buyProductDialogWindow.on('show', () => {
  toggleTwoClasses(wrapper, 'ui-dialog-window-visible', 'ui-dialog-window-hidden', 300);

  focusTrap.activate();
});

buyProductDialogWindow.on('hide', () => {
  toggleTwoClasses(wrapper, 'ui-dialog-window-visible', 'ui-dialog-window-hidden', 300);

  focusTrap.deactivate();
});

oneClickBuyButton.addEventListener('click', () => {
  buyProductDialogWindow.show();
});

export default buyProductDialogWindow;

/* eslint-disable no-unused-vars */

const swiper = new Swiper('.window-sliderTwo', {
  loop: true,
  slidesPerView: 1,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.sliderTwo-next',
    prevEl: '.sliderTwo-prev',
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },

    800: {
      slidesPerView: 3,
    },

    1150: {
      slidesPerView: 4,
    },
  },
});
const swiper2 = new Swiper('.window-sliderOne', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button__next',
    prevEl: '.swiper-button__prev',
  },
  thumbs: {
    swiper,
  },
});
