import JustValidate from 'just-validate';
import Inputmask from 'inputmask';
import dataSentProductWindow from './_modal-card-product';

const callbackForm = document.querySelector('.product-window__form');

if (callbackForm) {
  const phoneField = callbackForm.querySelector('.product-window__phone');

  const fieldMask = new Inputmask('+7 (999) 999-99-99');
  fieldMask.mask(phoneField);

  const validation = new JustValidate(callbackForm, {
    errorFieldCssClass: 'ui-invalid-field',
    successFieldCssClass: 'ui-valid-field',

    errorLabelStyle: {
      color: 'hsl(356 100% 71%)',
    },
  });

  validation
    .addField('.product-window__name', [
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Минимальное кол-во букв - 2',
      },
      {
        rule: 'maxLength',
        value: 50,
        errorMessage: 'Максимальное кол-во букв - 50',
      },
      {
        rule: 'customRegexp',
        value: '^[A-zА-яЁё]+$',
        errorMessage: 'Недопустимый формат',
      },
      {
        rule: 'required',
        errorMessage: 'Это поле обязательное!',
      },
    ])
    .addField('.product-window__phone', [
      {
        rule: 'required',
        errorMessage: 'Это поле обязательное!',
      },
      {
        rule: 'function',
        validator() {
          const phone = phoneField.inputmask.unmaskedvalue();
          return Boolean(Number(phone)) && phone.length === 10;
        },
        errorMessage: 'Не полностью введён номер телефона',
      },
    ])
    .addField('.window-checkbox__field', [
      {
        rule: 'required',
        errorMessage: 'Это поле обязательное!',
      },
    ])
    .onSuccess((e) => {
      const allFields = document.querySelectorAll('.product-window__field');

      [...allFields].forEach((field) => {
        field.classList.remove('ui-valid-field');
      });

      dataSentProductWindow.show();

      e.target.reset();
    });
}
