let swiperSub4Instance = null;
function initSub4Swiper() {
  if (swiperSub4Instance) {
    swiperSub4Instance.destroy(true, true);
  }

  swiperSub4Instance = new Swiper(".mySwiper-sub4", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 1,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: false,
    },
  });
}
window.addEventListener("DOMContentLoaded", () => {
  initSub4Swiper();
});
