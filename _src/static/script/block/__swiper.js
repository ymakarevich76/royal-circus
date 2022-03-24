const swiperCards = new Swiper('.cards__slider', {
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

const imageSwiper = new Swiper('.image-slider__slider', {
  slidesPerView: 3,

  loop: true,

  navigation: {
    prevEl: '.image-slider__btn-prev',
    nextEl: '.image-slider__btn-next',
  },

  pagination: {
    el: ".image-slider__pagination"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2
    },
    1199: {
      slidesPerView: 3
    }
  }
});


const swiperCardsLike = new Swiper('.like__slider', {
  slidesPerView: 3,

  loop: true,
  spaceBetween: 60,

  navigation: {
    prevEl: '.like__slider-btn-prev',
    nextEl: '.like__slider-btn-next',
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

const swiperReviews = new Swiper('.reviews-slider__swiper', {
  slidesPerView: 3,

  loop: true,
  centeredSlides: true,

  pagination: {
    el: ".reviews-slider__pagination"
  },

  // breakpoints: {
  //   320: {
  //     slidesPerView: 1
  //   },
  //   768: {
  //     slidesPerView: 2
  //   },
  //   1199: {
  //     slidesPerView: 3
  //   }
  // }
});



const swiperVideo = new Swiper('.video-slider__slider', {
  slidesPerView: 1,

  navigation: {
    prevEl: '.video-slider__btn-prev',
    nextEl: '.video-slider__btn-next',
  },

  pagination: {
    el: ".video-slider__pagination"
  },

  loop: true,
  centeredSlides: true,


  // breakpoints: {
  //   320: {
  //     slidesPerView: 1
  //   },
  //   768: {
  //     slidesPerView: 1
  //   },
  //   1199: {
  //     slidesPerView: 1
  //   }
  // }
});
