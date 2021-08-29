const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
  activeSlide++

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }
  setBgToBody()
  setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  setBgToBody()
  setActiveSlide()
})

//functions

setBgToBody()

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

setActiveSlide()

function setActiveSlide() {
  //if this code is not used then after reaching to last image, this never removes the active class
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })

  slides[activeSlide].classList.add('active')
}
