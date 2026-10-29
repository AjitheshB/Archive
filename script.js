const intro = document.querySelector(".intro")
const tutorial = document.querySelector(".tutorial")
const slides = document.querySelectorAll(".tutorial-slide")
const terminal = document.querySelector("#terminal")

let vis = 0

intro.addEventListener("click", () => {
    terminal.scrollTo({
            top:0,
            behavior: "smooth"
        })
    if (vis === 0) {
        intro.classList.add("entered")
        tutorial.classList.add("visible")

// BGM!!!
        const bgm = document.querySelector("#bgm")

        bgm.volume = 0.5

        bgm.play().catch(error => {
            console.log("BGM failed")
        })
    } else {
        terminal.classList.add("visible")
        intro.classList.add("entered")

        terminal.scrollTo({
            top:0,
            behavior: "smooth"
        })
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
        lucide.createIcons()
        return
    }
    slides[currentSlide].classList.add("active")
}

tutorial.addEventListener("click", nextSlide)

document.addEventListener("keydown", (event) => {
    if (event.code !== "Space") return
    if (event.repeat) return
    if (!tutorial.classList.contains("visible")) return

    event.preventDefault()
    nextSlide()

})

const btn = document.querySelector(".status .btn:not(.help-btn")

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

lucide.createIcons();

const help = document.querySelector(".help-btn")

help.addEventListener("click", () => {
    terminal.classList.remove("visible")
    tutorial.classList.add("visible")

    slides.forEach(slide => slide.classList.remove("active"))

    currentSlide = 0
    slides[currentSlide].classList.add("active")
}
)

const recordsBtn = document.querySelector(".recordsbtn")
const recordsPage = document.querySelector(".records-pg")
const deleteContent = document.querySelector(".del-contents")

recordsBtn.addEventListener("click", () => {
    deleteContent.classList.add("remove")
    recordsPage.classList.add("visible")

    terminal.scrollTo( {
        top: 0,
        behavior: "smooth"
    })
})

const back = document.querySelectorAll(".back")

back.forEach((back) => {
    back.addEventListener("click",() => {
        if (subjId.classList.contains("visible")) {
            subjId.classList.remove("visible")
            recordsPage.classList.add("visible")
            terminal.scrollTo({
                top: 0,
                behavior: "smooth"
        })
        } else {
            deleteContent.classList.remove("remove")
            recordsPage.classList.remove("visible")
            terminal.scrollTo({
                top: 0,
                behavior: "smooth"
        })

    }
})
const subjId = document.querySelector(".subject-identification")
const subjIdBtn = document.querySelector(".identification")

subjIdBtn.addEventListener("click", () => {
    subjId.classList.add("visible")
    recordsPage.classList.remove("visible")

    terminal.scrollTo({
        top:0,
        behavior:"smooth"
    })
})
})