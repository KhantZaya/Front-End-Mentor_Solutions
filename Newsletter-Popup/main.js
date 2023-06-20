import './css/main.css'

const root = document.querySelector(":root")
const checkBox = document.querySelector("#toggle")

loadTheme(getTheme())

function getTheme () {
  let theme = window.matchMedia("(prefers-color-scheme: dark)") .matches
  ? "dark" : "light"

  theme = localStorage.getItem("theme") ? localStorage.getItem('theme') : null
  return theme
}

function loadTheme (theme) {
  if (theme == "light") {
    checkBox.checked = false
  }else {
    checkBox.checked = true
  }
  root.setAttribute('color-scheme',`${theme}`)
}

checkBox.addEventListener("change", () => {
  let theme = getTheme()
  if (theme == "light") {
    theme = 'dark'
  }else if (theme == "dark"){
    theme = "light"
  }
  localStorage.setItem("theme",theme)
  loadTheme(theme)
})
