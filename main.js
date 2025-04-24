let fullscreen = false

document.querySelectorAll("#gallery img").forEach(element => {
    element.addEventListener("click", () => {
        if (fullscreen) {
            document.exitFullscreen().finally(()=> fullscreen = false)
            element.style.objectFit = ""
        } else {
            element.requestFullscreen().finally(() => fullscreen = true)
            element.style.objectFit = "contain"
        }
    })
})

const toggleButton = document.querySelector("label.nav-toggle-label")
const navList = document.querySelector("#nav-toggle")

toggleButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    navList.classList.toggle('active')
})


const kofi = document.querySelector("#kofiframe")

kofi.style.addClassName("meepa-green")
