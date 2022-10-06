//Tabs section giftset
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.giftset__button').forEach(function(tabBtn) {
    tabBtn.addEventListener('click', function (event) {
      document.querySelector(".giftset__button-active").classList.remove("giftset__button-active");
      tabBtn.classList.add("giftset__button-active");
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.giftset__content').forEach(function(tabContent) {
        tabContent.classList.remove('giftset__content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('giftset__content-active')
    })
  })
})

//Swiper section-coffee
new Swiper('#js-coffee-swiper', {
  slidesPerView:2,
  spaceBetween:29,
  autoHeight: true,
  watchSlidesProgress: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//Swiper section-combo
new Swiper('#js-combo-swiper', {
  slidesPerView:3,
  spaceBetween:30,
  autoHeight: true,
  watchSlidesProgress: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//Год в футере
const footer = document.querySelector('.footer__descript');

let dateNow = new Date()

let currentYear = dateNow.getFullYear()

footer.textContent += currentYear;

console.log(footer.textContent);