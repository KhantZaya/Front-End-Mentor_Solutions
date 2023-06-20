const shareBtn = document.querySelector('.share')
const featureBox = document.querySelector('.feature')

shareBtn.addEventListener('click', () => {
    featureBox.classList.toggle('active-share')
})