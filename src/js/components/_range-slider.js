import noUiSlider from 'nouislider';

const rangeSlider = document.querySelector('.wrapper__slider');
const fieldNumberFirst = document.querySelector('.range-wrapper__field_first');
const fieldNumberSecond = document.querySelector('.range-wrapper__field_second');
const allFields = [fieldNumberFirst, fieldNumberSecond];

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [30000, 150000],
    connect: true,
    step: 1,
    range: {
      min: 0,
      max: 200000,
    },
  });

  rangeSlider.noUiSlider.on('update', (values, handle) => {
    allFields[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (i, value) => {
    const array = [null, null];
    array[i] = value;
    rangeSlider.noUiSlider.set(array);
  };

  allFields.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}
