/* eslint-disable no-use-before-define */
const firstBreakpoint = '(min-width: 100px)';
const secondBreakpoint = '(min-width: 961px)';
const thirdBreakpoint = '(min-width: 1271px)';

function showingCardsByClick(showOnLoad = 8, showMore = 4) {
  const SHOW_ON_LOAD = showOnLoad;
  const SHOW_MORE = showMore;

  const cardItems = [...document.querySelectorAll('.site-high__item')];
  const showMoreButton = document.querySelector('.site-high__button');

  showItems(SHOW_ON_LOAD);

  showMoreButton.addEventListener('click', () => {
    showItems(SHOW_MORE);
  });

  function showItems(count) {
    cardItems.forEach((el) => {
      el.classList.remove('ui-card-active');
    });

    cardItems.splice(0, count).forEach((el) => {
      el.classList.add('ui-card-active');
    });

    showMoreButton.classList.remove('ui-button-hide');

    if (!cardItems.length) {
      showMoreButton.classList.add('ui-button-hide');
    }
  }
}

function changingValuesOnBreakpoints() {
  if (window.matchMedia(thirdBreakpoint).matches) {
    showingCardsByClick();
  } else if (window.matchMedia(secondBreakpoint).matches) {
    showingCardsByClick(6, 3);
  } else if (window.matchMedia(firstBreakpoint).matches) {
    showingCardsByClick(6, 2);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  changingValuesOnBreakpoints();
});

window.addEventListener('resize', () => {
  changingValuesOnBreakpoints();
});
