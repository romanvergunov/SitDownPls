/* eslint-disable no-unused-vars */
import Swiper from 'swiper/swiper-bundle';

const swiper = new Swiper('.left-sliderTwo', {
  loop: true,
  slidesPerView: 2.5,
  freeMode: true,
  watchSlidesProgress: true,
  direction: 'horizontal',
  breakpoints: {
    500: {
      slidesPerView: 4,
      direction: 'vertical',
    },

    990: {
      slidesPerView: 4,
      direction: 'horizontal',
    },
  },
});
const swiper2 = new Swiper('.left-sliderOne', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button__next',
    prevEl: '.swiper-button__prev',
  },
  thumbs: {
    swiper,
  },
});

const swiperCardBottom = new Swiper('.product-bottom__slider', {
  slidesPerGroup: 1,
  slidesPerView: 2,
  spaceBetween: 16,

  navigation: {
    nextEl: '.bottom-buttons__next',
    prevEl: '.bottom-buttons__prev',
  },

  a11y: {
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },

  breakpoints: {
    400: {
      slidesPerView: 2,
      spaceBetween: 32,
    },

    770: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
});
