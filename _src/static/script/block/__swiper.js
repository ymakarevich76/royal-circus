const swiper = new Swiper('.cards__slider', {
  navigation: {
    prev: '.cards__slider-btn-next',
    next: '.cards__slider-btn-next',
  },
  slidesPerView: 3,

  loop: true,
  spaceBetween: 60,

});
