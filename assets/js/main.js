console.log('init project');

new Swiper('.about__slider', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    prevEl: '.slider__btn-prev',
    nextEl: '.slider__btn-next',
  },
})

new Swiper('.photo__slider', {
  slidesPerView: 4,
  slidesPerGroup: 2,
  spaceBetween: 20,
  loop: false,
  navigation: {
    prevEl: '.slider__btn-prev',
    nextEl: '.slider__btn-next',
  },
})