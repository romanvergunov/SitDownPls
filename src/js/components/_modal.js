import A11yDialog from 'a11y-dialog';
import { createFocusTrap } from 'focus-trap';
import toggleTwoClasses from './_toggle-two-classes';

const wrapper = document.getElementById('dialog-window');

const dialogWindow = new A11yDialog(wrapper);

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

dialogWindow.on('show', () => {
  toggleTwoClasses(wrapper, 'dialog-visible', 'dialog-hidden', 300);

  focusTrap.activate();
});

dialogWindow.on('hide', () => {
  toggleTwoClasses(wrapper, 'dialog-visible', 'dialog-hidden', 300);

  focusTrap.deactivate();
});

export default dialogWindow;
