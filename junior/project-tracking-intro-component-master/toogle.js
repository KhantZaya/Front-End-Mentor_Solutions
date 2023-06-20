const openMenu = document.querySelector('.hum-menu')
const closeMenu = document.querySelector('.close-menu')
const nav = document.querySelector('.nav')

openMenu.addEventListener('click', () => {
    nav.classList.toggle('active')
    openMenu.style.display= "none"
    closeMenu.style.display= "block"
})

closeMenu.addEventListener('click', () => {
    nav.classList.toggle('active')
    openMenu.style.display= "block"
    closeMenu.style.display= "none"
})

