var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
})

let paginationSpans = document.querySelectorAll('.swiper-pagination span')

paginationSpans.forEach((pSpan) => {
  pSpan.style.border = '2px solid hsl(12, 88%, 59%)'
  pSpan.style.width = '0.65rem'
  pSpan.style.height = '0.65rem'
  pSpan.style.backgroundColor = 'hsl(12, 88%, 59%)'
})
