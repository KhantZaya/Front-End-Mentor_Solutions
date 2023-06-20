let url = 'data.json'
const times = document.querySelectorAll('.time')
const hours = document.querySelectorAll('.hours')
const lastTime = document.querySelectorAll('.last-time')
const dailyBtn = document.querySelector('.daily')
const weeklyBtn = document.querySelector('.weekly')
const MonthlyBtn = document.querySelector('.monthly')

loadDailyData()
times.forEach(time => {
    time.addEventListener('click',() => {
        if (time.classList.contains('active')) {
            return
        }else {
            times.forEach(time => time.classList.remove('active'))
            time.classList.add('active')
        }
    })
})

dailyBtn.addEventListener('click', () => loadDailyData())
weeklyBtn.addEventListener('click', () => loadWeeklyData())
MonthlyBtn.addEventListener('click', () => loadMonthylData())

function loadWeeklyData () {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                hours[i].innerHTML = `${data[i].timeframes.weekly.current}Hrs`
                lastTime[i].innerHTML = `Last week - ${data[i].timeframes.weekly.previous}Hrs`
            }
        })
}
function loadMonthylData () {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                hours[i].innerHTML = `${data[i].timeframes.monthly.current}Hrs`
                lastTime[i].innerHTML = `Last month - ${data[i].timeframes.monthly.previous}Hrs`
            }
        })
}
function loadDailyData () {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                hours[i].innerHTML = `${data[i].timeframes.daily.current}Hrs`
                lastTime[i].innerHTML = `Last day - ${data[i].timeframes.daily.previous}Hrs`
            }
        })
}

//theme switch
const toggle = document.querySelector('#toggle')
const root = document.querySelector(":root")
loadTheme(getTheme())

toggle.addEventListener('change', () => {
    let theme = getTheme()
    if (theme == "light") {
        theme = "dark"
    }else if (theme == "dark"){
        theme =  "light"
    }
    console.log("change theme:",theme);
    loadTheme(theme)
})

function getTheme () {
    let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark" : "light"
    theme = localStorage.getItem("theme") ? localStorage.getItem('theme') : null
    console.log("get theme:",theme);
    return theme
}
function loadTheme (theme) {
    if (theme == "dark") {
        toggle.checked = true
    }else {
        toggle.checked = false
    }
    root.setAttribute('color-scheme',`${theme}`)
    localStorage.setItem("theme",theme)
}