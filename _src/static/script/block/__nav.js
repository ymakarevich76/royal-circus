const hamburger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const btnClose = document.querySelector('.header__btn-close');
const body = document.querySelector('body');

const openMenu = () => {
  body.classList.add('fixed');
  nav.classList.add('header__nav--active');
};

const closeMenu = () => {
  body.classList.remove('fixed');
  nav.classList.remove('header__nav--active');
}

hamburger.addEventListener('click', () => {
  openMenu();
});

btnClose.addEventListener('click', () => {
  closeMenu();
});

nav.addEventListener('click', (evt) => {
  if (evt.target === nav) {
    closeMenu();
  }
});


document.addEventListener('click', e => {
  let target = e.target;
  let its_menu = target == nav || nav.contains(target);
  let its_hamburger = target == hamburger;
  let menu_is_active = nav.classList.contains('header__nav--active');

  if (!its_menu && !its_hamburger && menu_is_active) {
    closeMenu();
  }
})
