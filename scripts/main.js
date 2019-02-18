const sliderImages = document.querySelectorAll('.sliderContainer img')
const sliderContainer = document.querySelector('.sliderContainer')
let step = -960,
    time = 2000,
    pos = 0

let slide = setInterval(
  function(){
    pos = (pos+1)%sliderImages.length

    sliderContainer.style.left = pos*step+'px'
  },
  time
)
