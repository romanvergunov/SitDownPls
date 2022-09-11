import JustValidate from 'just-validate';
import Inputmask from 'inputmask';
import dataSentDialogWindow from './_modal';

const callbackForm = document.querySelector('.site-data__form');

if (callbackForm) {
  const phoneField = callbackForm.querySelector('.site-data__tel');

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
    .addField('.site-data__name', [
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
    .addField('.site-data__tel', [
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
    .addField('.site-data__email', [
      {
        rule: 'required',
        errorMessage: 'Это поле обязательное!',
      },
      {
        rule: 'email',
        errorMessage: 'Недопустимый формат',
      },
    ])
    .addField('.site-data__input', [
      {
        rule: 'required',
        errorMessage: 'Это поле обязательное!',
      },
    ])
    .onSuccess((e) => {
      const allFields = document.querySelectorAll('.form-field');

      [...allFields].forEach((field) => {
        field.classList.remove('ui-valid-field');
      });

      dataSentDialogWindow.show();

      e.target.reset();
    });
}
