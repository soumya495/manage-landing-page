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

let gradClass =
  'w-screen h-screen bg-gradient-to-br from-gray-700 via-gray-900 to-black  overflow-y-hidden'

let hamburgerIcon = document.querySelector('.ham-menu')
let hamLines = document.querySelectorAll('.ham-menu div')
let mobMenu = document.querySelector('.mobile-menu')
let allSections = document.querySelectorAll('section')

hamburgerIcon.addEventListener('click', function () {
  if (!hamburgerIcon.classList.contains('open')) {
    hamLines[0].style.transform = 'rotate(-45deg) translateY(5px)'
    hamLines[2].style.transform = 'rotate(45deg) translateY(-5px)'
    hamLines[1].style.position = 'absolute'
    hamLines[1].style.opacity = '0'
    hamburgerIcon.classList.add('open')
    hamburgerIcon.classList.add('open')
    document.body.style.overflowY = 'hidden'
    document.body.style.backgroundImage =
      'linear-gradient(rgb(255,255,255), rgb(156, 163, 175), rgb(75, 85, 99))'
    allSections.forEach((sec) => (sec.style.filter = 'blur(10px)'))
    mobMenu.style.display = 'flex'
  } else {
    hamLines[0].style.transform = 'rotate(0) translateY(0)'
    hamLines[2].style.transform = 'rotate(0) translateY(0)'
    hamLines[1].style.opacity = '1'
    hamLines[1].style.position = 'unset'
    hamburgerIcon.classList.remove('open')
    mobMenu.style.display = 'none'
    document.body.style.overflowY = 'scroll'
    document.body.style.backgroundImage = 'unset'
    allSections.forEach((sec) => (sec.style.filter = 'unset'))
    mobMenu.style.display = 'none'
  }
})
