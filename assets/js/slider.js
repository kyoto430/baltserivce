console.log('init project');

new Swiper('.about__slider', {
  slidesPerView: 1,
  loop: false,
  navigation: {
    prevEl: '.slider__btn-prev',
    nextEl: '.slider__btn-next',
  },
});

if (window.innerWidth > 768) {
  new Swiper('.photo__slider', {
    slidesPerView: 4,
    slidesPerGroup: 2,
    spaceBetween: 20,
    loop: false,
    navigation: {
      prevEl: '.slider__btn-prev',
      nextEl: '.slider__btn-next',
    },
  });
} else if (window.innerWidth <= 768 && window.innerWidth >= 375) {
  new Swiper('.photo__slider', {
    slidesPerView: 2.5,
    slidesPerGroup: 1,
    spaceBetween: 20,
    loop: false,
    navigation: {
      prevEl: '.slider__btn-prev',
      nextEl: '.slider__btn-next',
    },
  });
} else if (window.innerWidth <= 375) {
  new Swiper('.photo__slider', {
    slidesPerView: 1.25,
    slidesPerGroup: 1,
    spaceBetween: 20,
    loop: false,
    navigation: {
      prevEl: '.slider__btn-prev',
      nextEl: '.slider__btn-next',
    },
  });
}
