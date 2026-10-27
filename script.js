const intro = document.querySelector(".intro")
const tutorial = document.querySelector(".tutorial")
const slides = document.querySelectorAll(".tutorial-slide")
const terminal = document.querySelector("#terminal")


intro.addEventListener("click", () => {
    intro.classList.add("entered")
    tutorial.classList.add("visible")
})


// Tutorial
let currentSlide=0

function nextSlide() {
    if (!tutorial.classList.contains("visible")) return

    slides[currentSlide].classList.remove("active")
    
    currentSlide++

    if(currentSlide >= slides.length) {
        tutorial.classList.remove("visible")
        terminal.classList.add("visible")
        return
    }
    slides[currentSlide].classList.add("active")
}

tutorial.addEventListener("click", nextSlide)

document.addEventListener("keydown", (event) => {
    if (event.code !== "Space") return
    if (!tutorial.classList.contains("visible")) return

    event.preventDefault()
    nextSlide()
})