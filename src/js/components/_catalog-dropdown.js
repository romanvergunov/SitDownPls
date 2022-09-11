const dropdownListsButtons = [...document.querySelectorAll('.mobile-button')];
const dropdownLists = [...document.querySelectorAll('.mobile-list')];

dropdownListsButtons.forEach((dropdownListButton) => {
  dropdownListButton.addEventListener('click', (event) => {
    const currentButton = event.currentTarget;

    dropdownListsButtons.forEach((button) => {
      if (button !== currentButton) {
        button.classList.remove('dropdown-active');
        button.setAttribute('aria-expanded', 'false');
      }
    });

    currentButton.classList.toggle('dropdown-active');
    currentButton.setAttribute('aria-expanded', 'true');

    if (currentButton.classList.contains('dropdown-active')) {
      currentButton.setAttribute('aria-expanded', 'true');
    } else {
      currentButton.setAttribute('aria-expanded', 'false');
    }

    const currentList = dropdownListButton.parentElement.querySelector('.mobile-list');

    dropdownLists.forEach((dropdownList) => {
      if (dropdownList !== currentList) {
        dropdownList.classList.remove('button-active');
      }
    });

    currentList.classList.toggle('button-active');
  });
});

document.addEventListener('click', (event) => {
  const { target } = event;

  if (!target.closest('.mobile-content')) {
    dropdownLists.forEach((dropdownList) => {
      dropdownList.classList.remove('button-active');
    });

    dropdownListsButtons.forEach((dropdownListButton) => {
      dropdownListButton.classList.remove('dropdown-active');
      dropdownListButton.setAttribute('aria-expanded', 'false');
    });
  }
});
