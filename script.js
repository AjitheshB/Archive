const intro = document.querySelector(".intro")
const archive = document.querySelector(".archive")


intro.addEventListener("click", () => {
    intro.classList.add("entered")
    archive.classList.add("entered")
})