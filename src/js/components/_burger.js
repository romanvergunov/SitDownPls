const burgerButton = document.querySelector('.header-middle__burger');
const burgerNav = document.querySelector('.header-middle__nav');
const burgerMenu = document.querySelector('.header-middle__list');
const DopMenu = document.querySelector('.header-top__list_mobile');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('burger-active');
  burgerNav.classList.toggle('burger-active');
  burgerMenu.classList.toggle('burger-active');
  DopMenu.classList.toggle('burger-active');

  if (burgerButton.classList.contains('burger-active')) {
    burgerButton.setAttribute('aria-expanded', 'true');
    burgerButton.setAttribute('aria-label', 'Закрыть основное меню.');
    // eslint-disable-next-line no-undef
    disablePageScroll(burgerMenu);
  } else {
    burgerButton.setAttribute('aria-expanded', 'false');
    burgerButton.setAttribute('aria-label', 'Открыть основное меню.');

    // eslint-disable-next-line no-undef
    enablePageScroll(burgerMenu);
  }
});
