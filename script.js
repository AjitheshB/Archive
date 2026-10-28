const intro = document.querySelector(".intro")
const tutorial = document.querySelector(".tutorial")
const slides = document.querySelectorAll(".tutorial-slide")
const terminal = document.querySelector("#terminal")

let vis = 0

intro.addEventListener("click", () => {
    if (vis === 0) {
        intro.classList.add("entered")
        tutorial.classList.add("visible")

// BGM!!!
        const bgm = document.querySelector("#bgm")

        bgm.volume = 0.25

        bgm.play().catch(error => {
            console.log("BGM failed")
        })
    } else {
        terminal.classList.add("visible")
        intro.classList.add("entered")
    }
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

const btn = document.querySelector(".btn")

document.addEventListener("keydown", (event) => {
    if (event.code !== "Escape") return
    if (!terminal.classList.contains("visible")) return

    intro.classList.remove("entered")
    terminal.classList.remove("visible")
    vis = 1
})

btn.addEventListener("click", () => {
    if (!terminal.classList.contains("visible")) return

    intro.classList.remove("entered")
    terminal.classList.remove("visible")
    vis = 1
})