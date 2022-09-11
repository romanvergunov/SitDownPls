import Swiper from 'swiper/swiper-bundle';

const swiperHero = new Swiper('.site-hero__slider', {
  loop: true,

  pagination: {
    el: '.site-hero__pag',
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  a11y: {
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
});

const swiperSpecial = new Swiper('.top-slider', {
  slidesPerGroup: 1,
  slidesPerView: 'auto',
  spaceBetween: 30,

  navigation: {
    nextEl: '.special-top__next',
    prevEl: '.special-top__prev',
  },

  a11y: {
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  breakpoints: {
    750: {
      slidesPerGroup: 1,
    },
    960: {
      slidesPerGroup: 2,
    },
    961: {
      slidesPerGroup: 3,
    },

  },
});

const swiperUseful = new Swiper('.site-useful__slider', {
  slidesPerGroup: 1,
  slidesPerView: 1,
  spaceBetween: 30,

  navigation: {
    nextEl: '.site-useful__next',
    prevEl: '.site-useful__prev',
  },

  a11y: {
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    890: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 2,
    },
  },
});
