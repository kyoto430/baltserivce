console.log('init project');

new Swiper('.about__slider', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    prevEl: '.slider__btn-prev',
    nextEl: '.slider__btn-next',
  },
})