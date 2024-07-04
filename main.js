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