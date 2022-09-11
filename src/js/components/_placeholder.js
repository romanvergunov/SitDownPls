import superplaceholder from 'superplaceholder';

superplaceholder({
  el: document.querySelector('.header-bottom__input'),
  sentences: ['Пример: Диван'],
  options: {
    // delay between letters (in milliseconds)
    letterDelay: 50,
    sentenceDelay: 50,
  },
});

superplaceholder({
  el: document.querySelector('.site-data__name'),
  sentences: ['Пример: Роман'],
  options: {
    // delay between letters (in milliseconds)
    letterDelay: 50,
    sentenceDelay: 50,
  },
});

superplaceholder({
  el: document.querySelector('.site-data__email'),
  sentences: ['Пример: example@gmail.com'],
  options: {
    // delay between letters (in milliseconds)
    letterDelay: 50,
    sentenceDelay: 50,
  },
});
