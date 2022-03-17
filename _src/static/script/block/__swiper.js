const swiper = new Swiper('.cards__slider', {
  slidesPerView: 3,

  loop: true,
  spaceBetween: 60,

  navigation: {
    prevEl: '.cards__slider-btn-prev',
    nextEl: '.cards__slider-btn-next',
  },

  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 60,
    }
  }
});
