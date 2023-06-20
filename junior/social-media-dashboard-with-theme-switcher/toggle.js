import './css/main.css'

const root = document.querySelector(":root")
const cBox = document.querySelector(".cBox")

window.addEventListener("DOMContentLoaded", () => {
    loadTheme( getTheme() )
})

cBox.addEventListener('change', () => {
    let theme = getTheme()
    if (theme == "dark") {
        theme = 'light'
    }else {
        theme = 'dark'
    }
    loadTheme(theme)
})

function getTheme () {
    let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark" : "light"
    theme = localStorage.getItem("dashBoard-theme") ? localStorage.getItem("dashBoard-theme") : null
    //console.log(theme);
    return theme
}

function loadTheme (theme) {
        if (theme == "dark") {
            cBox.checked = false
        }else {
            cBox.checked = true
        }
        root.setAttribute('color-scheme',`${theme}`)
        localStorage.setItem("dashBoard-theme",theme)
}

getTheme()
