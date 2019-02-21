// SLIDER

const pictures 		  = document.querySelectorAll(".sliderContainer img")
const sliderContainer = document.querySelector(".sliderContainer")
const previousButton  = document.querySelector(".previous")
const nextButton 	  = document.querySelector(".next")
const dots			  = document.querySelectorAll("ul.dots li")

let time = 3000,
	step = -600,
	currentPicture = 0,
	slide

function slideInterval(){
	slide = setInterval(() =>{
		currentPicture = (currentPicture + 1) % pictures.length

		// currentPicture++
		// if(currentPicture >= pictures.length){
		// 	currentPicture = 0
		// }

		sliderContainer.style.left = currentPicture * step + "px"
	}, time)
}

slideInterval()

sliderContainer.addEventListener("mouseover", () => {
	clearInterval(slide)
})
sliderContainer.addEventListener("mouseleave", () => {
	slideInterval()
})

previousButton.addEventListener("click", (e) => {
	e.preventDefault()
	currentPicture--
	if(currentPicture < 0){
		currentPicture = pictures.length - 1
	}
	sliderContainer.style.left = currentPicture * step + "px"
})

nextButton.addEventListener("click", (e) => {
	e.preventDefault()
	currentPicture++
	if(currentPicture >= pictures.length){
		currentPicture = 0
	}
	sliderContainer.style.left = currentPicture * step + "px"
})

for(let i = 0; i < dots.length; i++){
	dots[i].querySelector("a").addEventListener("click", (e) => {
		e.preventDefault()
		currentPicture = i
		sliderContainer.style.left = currentPicture * step + "px"
	})
}