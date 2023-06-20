const pageView = document.querySelector('.pv')
const price = document.querySelector('.price')
const time = document.querySelector('.time')
const fill = document.querySelector('.fill')
const slider = document.querySelector('.slider')
const checkBox = document.querySelector('.checkBox')
let yearly = false
let value = 0

slider.addEventListener("change", () => {
    value = slider.value
    let fillLength = value * 25
    fill.style.width = fillLength + "%"

    changeDom(value)
})

function renderPackage (price) {
    if (yearly) {
        yearlyPrice(price)
    }else {
        monthlyPrice(price)
    }
}

function changeDom (value) {
    if (value == 4) {
        pageView.innerHTML = "1M"
        renderPackage(36)
    }else if (value == 3) {
        pageView.innerHTML = "500K"
        renderPackage(24)
    }else if (value == 2) {
        pageView.innerHTML = "100K"
        renderPackage(16)
    }else if (value == 1) {
        pageView.innerHTML = "50K"
        renderPackage(12)
    }else if (value == 0) {
        pageView.innerHTML = "10K"
        renderPackage(8)
    }
}


function monthlyPrice (prc) {
    price.innerHTML = "$"+prc.toString()
}
function yearlyPrice (prc) {
    let total = (prc * 12) * 0.75
    price.innerHTML = "$"+total.toString()
}

checkBox.addEventListener('click', () => {
    if (checkBox.checked) {
        yearly = true
        time.innerHTML = "/year"
    }else {
        yearly = false
        time.innerHTML = "/month"
    }
    changeDom(value)
})


